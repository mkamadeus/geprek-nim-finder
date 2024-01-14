import {isNumber} from "../utils/numberUtils"

export default defineEventHandler(async (event) => {
  const {query, chips, page} : SearchRequestBody = await readBody(event)
  // const students = await useStorage().getItem<Student[]>('students')

  const searchResults = await search(query, chips || [])
  const results = searchResults.slice((page-1)*LIMIT, page*LIMIT)
  
  const response : SearchResponseBody = {
    results,
    metadata: {
      page,
      totalPages: Math.ceil(searchResults.length / LIMIT),
      totalResults: searchResults.length,
    }
  } 
  // const result = students!.find(({tpbID, majorID}) => tpbID == nim || majorID == nim)
  return response
})

const LIMIT = 10;

const getTokens = async (query: string, settings?: Partial<SearchConfig>) => {
  const codes = await useStorage().getItem<Record<string, string>>('codes')
  if(!codes) {
    throw new Error('Failed to load codes')
  }

  const result: { alphabetic: string[]; numeric: string[]; prefixes: string[] } = {
    alphabetic: [],
    numeric: [],
    prefixes: [],
  };

  // get prefixes
  // will match for prefixes found in query, e.g:
  // "if18", "if2018", "if 18", "if 2018"
  const prefixRegex = /([A-z]{2,})\s?(20)?([0-9]{2})\b/g;

  let matches = prefixRegex.exec(query);
  const occurrences: [number, number][] = [];

  while (matches != null) {
    const [full, code, year, yearSuffix] = matches;
    const index = matches.index;
    const length = full.length;

    const prefix: string | undefined = codes[code.toUpperCase()];

    // if code exists, insert as prefix
    if (prefix) {
      // handle SBM year
      if (settings && settings.useSBMYear) {
        const offset = ['190', '192', '197'].includes(prefix) ? 3 : 0;
        result.prefixes.push(prefix + (parseInt(yearSuffix) - offset).toString());
      } else {
      }
    }
    result.prefixes.push(prefix + yearSuffix);

    // add occurrence to be cleanup later
    occurrences.push([index, length]);

    // re-search for matches
    matches = prefixRegex.exec(query);
  }

  // clean the query by given occurences
  let cleanQuery = query;

  let offset = 0;
  while (occurrences.length != 0) {
    const [index, length] = occurrences.pop()!;
    cleanQuery =
      cleanQuery.slice(0, index + offset) + cleanQuery.slice(index + length + offset);
    offset += length;
  }
  cleanQuery = cleanQuery.replace(/ +/g, ' ').trim();

  console.log(cleanQuery);

  // parse query
  const tokenized = cleanQuery.split(' ');

  // parse query to different types
  for (let t of tokenized) {
    if (t.length < 1) continue;
    t = t.toLowerCase();

    if (isNumber(t)) result.numeric.push(t);
    else result.alphabetic.push(t);
  }

  console.log(result);
  return result;
}

const search = async (query: string, chips: string[], settings?: Partial<SearchConfig>) : Promise<Student[]> => {
  const { alphabetic, numeric, prefixes } = await getTokens(query);

  const students = await useStorage().getItem<Student[]>('students')

  // only sort containing results
  const filtered = students!
    // filter based on year limit
    .filter((s) => {
      if (!settings || !settings.yearLimit) return true;
      return 2000 + parseInt(s.tpbID.slice(3, 5)) >= settings.yearLimit;
    })
    .filter(async (s) => {
      if (chips.length === 0) return true;

      for (const c of chips) {
        const { alphabetic, numeric, prefixes } = await getTokens(c);

        for (const t of prefixes) {
          if (s.tpbID.startsWith(t) || (s.majorID && s.majorID.startsWith(t))) return true;
        }

        for (const t of alphabetic) {
          const tokenizedName = s.name.toLowerCase().split(' ');
          for (const n of tokenizedName) {
            if (n.startsWith(t) || n.endsWith(t)) return true;
          }
        }
      }

      return false;
    })
    // filter based on prefixes
    .filter((s) => {
      if (prefixes.length === 0) return true;

      for (const t of prefixes) {
        if (s.tpbID.startsWith(t) || (s.majorID && s.majorID.startsWith(t))) return true;
      }

      return false;
    })
    // filter result by name and nim keyword
    .reduce((result, s) => {
      let score = 0;
      let included = false;

      // ===== FILTER BY PREFIX ====

      // when no prefix given
      if (alphabetic.length === 0 && numeric.length === 0) {
        included = true;
      }

      // ===== FILTER BY NAME =====

      // factor for prioritizing first keywords for ensuring name order
      let factor = 1;
      for (const t of alphabetic) {
        const lowercased = s.name.toLowerCase();
        if (lowercased.includes(t)) {
          // calculate score
          const tokenizedName = lowercased.split(' ');

          let locationFactor = factor;
          for (const n of tokenizedName) {
            if (n.startsWith(t)) score += 3 * locationFactor;
            if (n.endsWith(t)) score += 2 * locationFactor;
            locationFactor *= 0.9;
          }

          included = true;
          factor *= 0.9;
        }
      }

      // ===== FILTER BY NIM =====

      for (const t of numeric) {
        if (s.tpbID.includes(t) || (s.majorID && s.majorID.includes(t))) {
          if (s.tpbID.startsWith(t) || (s.majorID && s.majorID.startsWith(t))) score += 3;
          if (s.tpbID.endsWith(t) || (s.majorID && s.majorID.endsWith(t))) score += 2;
          included = true;
        }
      }

      if (included) {
        result.push([s, score]);
      }

      return result;
    }, [] as [Student, number][]);

    filtered.sort((s1, s2) => {
      // first, sort by score
      if (s1[1] > s2[1]) return -1;
      if (s1[1] < s2[1]) return 1;
      
      // defaults to sort by name
      if (s1[0].name > s2[0].name) return 1;
      if (s1[0].name < s2[0].name) return -1;
      return 0;
    });
    const result = filtered.map(([s, _]) => s)

  return result
}
