import { defineStore } from 'pinia';
import { Student } from '~/models/Student';
import { hasNumber, isNumber } from '~/utils/numberUtils';
import studentData from '~/json/data.json';

import c from '~/json/codes.json';
import { useSettings } from './settings';
const codes = c as { [key: string]: string };

export const useSearch = defineStore('search', {
  // initiate default state
  state: () => {
    const rawStudentData = useStorage('geprek-data', studentData);
    const chips = useStorage('geprek-chips', [] as string[]);
    const query = useStorage('geprek-query', '');

    return {
      query,
      chips: chips,
      students: rawStudentData.value.map((s) => ({
        name: s[0],
        tpbID: s[1],
        majorID: s[2],
      })) as Student[],
      result: [] as [Student, number][],
    };
  },
  actions: {
    getChips() {
      const tokenized = this.query.split(' ');
      const query: string[] = [];
      for (const t of tokenized) {
        if (t.length > 2 && t[0] === '?' && t[t.length - 1] === '?') {
          this.chips.push(t.slice(1, t.length - 1));
        } else {
          query.push(t);
        }
      }
      this.query = query.join(' ');
    },
    removeChip(index: number) {
      this.chips.splice(index, 1);
    },
    resetResult() {
      this.result = [] as [Student, number][];
    },
    getTokens() {
      const result: { alphabetic: string[]; numeric: string[]; prefixes: string[] } = {
        alphabetic: [],
        numeric: [],
        prefixes: [],
      };

      // get prefixes
      // will match for prefixes found in query, e.g:
      // "if18", "if2018", "if 18", "if 2018"
      const prefixRegex = /([A-z]{2,})\s?(20)?([0-9]{2})\b/g;

      let matches = prefixRegex.exec(this.query);
      const occurences: [number, number][] = [];

      while (matches != null) {
        const [full, code, year, yearSuffix] = matches;
        const index = matches.index;
        const length = full.length;

        const prefix: string | undefined = codes[code.toLowerCase()];

        // if code exists, insert as prefix
        if (prefix) {
          if (yearSuffix) result.prefixes.push(prefix + yearSuffix);
          else result.prefixes.push(prefix + year);
        }

        // re-search for matches
        matches = prefixRegex.exec(this.query);
      }

      let cleanQuery = this.query;
      while (occurences.length != 0) {
        const [index, length] = occurences.pop()!;
        cleanQuery = cleanQuery.slice(0, index) + cleanQuery.slice(index + length);
      }
      cleanQuery = cleanQuery.replace(/  +/g, ' ');

      // parse query
      const tokenized = cleanQuery.split(' ');

      // parse query to different types
      for (let t of tokenized) {
        if (t.length < 1) continue;
        t = t.toLowerCase();

        if (isNumber(t)) result.numeric.push(t);
        else result.alphabetic.push(t);
      }
      return result;
    },
    getResult() {
      const { alphabetic, numeric, prefixes } = this.getTokens();
      const settings = useSettings();

      // only sort containing results
      const filtered = this.students
        .filter((s) => {
          return 2000 + parseInt(s.tpbID.slice(3, 5)) >= settings.yearLimit;
        })
        // sort for specific
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

          // ===== FILTER BY NAME =====

          if (alphabetic.length === 0 && numeric.length === 0) result.push([s, 0]);

          // factor for prioritizing first keywords for ensuring name order
          let factor = 1;
          for (const t of alphabetic) {
            const lowercased = s.name.toLowerCase();
            if (lowercased.includes(t)) {
              // calculate score
              const tokenizedName = lowercased.split(' ');

              for (const n of tokenizedName) {
                if (n.startsWith(t)) score += 3 * factor;
                if (n.endsWith(t)) score += 2 * factor;
              }

              included = true;
            }
            factor *= 0.9;
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

      const result = filtered.sort((s1, s2) => {
        // first, sort by score
        if (s1[1] > s2[1]) return -1;
        if (s1[1] < s2[1]) return 1;

        // defaults to sort by name
        if (s1[0].name > s2[0].name) return 1;
        if (s1[0].name < s2[0].name) return -1;
        return 0;
      });

      this.result = result;
    },
  },
});
