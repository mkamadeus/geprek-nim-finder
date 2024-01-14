// import { defineStore } from 'pinia';
// import { Student } from '~/models/Student';
// import { isNumber } from '~/utils/numberUtils';
// import studentData from '~/json/data.json';

// import c from '~/json/codes.json';
// import { useSettings } from './settings';
// const codes = c as { [key: string]: string };

// export const useSearch = defineStore('search', {
//   state: () => {
//     const rawStudentData = useStorage('geprek-data', studentData);
//     const chips = useStorage('geprek-chips', [] as string[]);
//     const query = useStorage('geprek-query', '');
//     const version = useStorage('geprek-version', '3.0.0-rc');
//     const limit = ref(10);
//     const result = reactive<[Student, number][]>([]);
//     const isLoading = ref(false);

//     return {
//       query,
//       version,
//       chips,
//       limit,
//       isLoading,
//       students: rawStudentData.value.map((s) => ({
//         name: s[0],
//         tpbID: s[1],
//         majorID: s[2],
//       })) as Student[],
//       result,
//     };
//   },
//   actions: {
//     /*
//     Parse chips from query.
//     */
//     parseChips() {
//       const tokenized = this.query.split(' ');
//       const query: string[] = [];
//       for (const t of tokenized) {
//         if (t.length > 2 && t[0] === '?' && t[t.length - 1] === '?') {
//           this.chips.push(t.slice(1, t.length - 1));
//         } else {
//           query.push(t);
//         }
//       }
//       this.query = query.join(' ');
//     },
//     /*
//     Remove chips.
//     */
//     removeChip(index: number) {
//       this.chips.splice(index, 1);
//     },
//     /*
//     Reset result by resetting the array.
//     */
//     resetResult() {
//       this.result = [] as [Student, number][];
//     },
//     /*
//     Parse query and get important tokens for filtering
//     */
//     getTokens(input: string) {
//       const settings = useSettings();
//       const result: { alphabetic: string[]; numeric: string[]; prefixes: string[] } = {
//         alphabetic: [],
//         numeric: [],
//         prefixes: [],
//       };

//       // get prefixes
//       // will match for prefixes found in query, e.g:
//       // "if18", "if2018", "if 18", "if 2018"
//       const prefixRegex = /([A-z]{2,})\s?(20)?([0-9]{2})\b/g;

//       let matches = prefixRegex.exec(input);
//       const occurrences: [number, number][] = [];

//       while (matches != null) {
//         const [full, code, year, yearSuffix] = matches;
//         const index = matches.index;
//         const length = full.length;

//         const prefix: string | undefined = codes[code.toLowerCase()];

//         // if code exists, insert as prefix
//         if (prefix) {
//           // handle SBM year
//           if (settings.useSBMYear) {
//             const offset = ['190', '192', '197'].includes(prefix) ? 3 : 0;
//             result.prefixes.push(prefix + (parseInt(yearSuffix) - offset).toString());
//           } else {
//             result.prefixes.push(prefix + yearSuffix);
//           }
//         }

//         // add occurrence to be cleanup later
//         occurrences.push([index, length]);

//         // re-search for matches
//         matches = prefixRegex.exec(this.query);
//       }

//       // clean the query by given occurences
//       let cleanQuery = this.query;

//       let offset = 0;
//       while (occurrences.length != 0) {
//         const [index, length] = occurrences.pop()!;
//         cleanQuery =
//           cleanQuery.slice(0, index + offset) + cleanQuery.slice(index + length + offset);
//         offset += length;
//       }
//       cleanQuery = cleanQuery.replace(/ +/g, ' ').trim();

//       console.log(cleanQuery);

//       // parse query
//       const tokenized = cleanQuery.split(' ');

//       // parse query to different types
//       for (let t of tokenized) {
//         if (t.length < 1) continue;
//         t = t.toLowerCase();

//         if (isNumber(t)) result.numeric.push(t);
//         else result.alphabetic.push(t);
//       }

//       console.log(result);
//       return result;
//     },
//     /*
//     Get result by using the tokens.
//     Will do these things in order:
//       1. Filter by year limit in settings
//       2. Filter by prefixes
//       3. Filter by names/NIM
//     */
//     getResult() {
//       this.limit = 10;

//       const { alphabetic, numeric, prefixes } = this.getTokens(this.query);
//       const settings = useSettings();

//       // only sort containing results
//       const filtered = this.students
//         // filter based on year limit
//         .filter((s) => {
//           return 2000 + parseInt(s.tpbID.slice(3, 5)) >= settings.yearLimit;
//         })
//         .filter((s) => {
//           if (this.chips.length === 0) return true;

//           for (const c of this.chips) {
//             const { alphabetic, numeric, prefixes } = this.getTokens(c);

//             for (const t of prefixes) {
//               if (s.tpbID.startsWith(t) || (s.majorID && s.majorID.startsWith(t))) return true;
//             }

//             for (const t of alphabetic) {
//               const tokenizedName = s.name.toLowerCase().split(' ');
//               for (const n of tokenizedName) {
//                 if (n.startsWith(t) || n.endsWith(t)) return true;
//               }
//             }
//           }

//           return false;
//         })
//         // filter based on prefixes
//         .filter((s) => {
//           if (prefixes.length === 0) return true;

//           for (const t of prefixes) {
//             if (s.tpbID.startsWith(t) || (s.majorID && s.majorID.startsWith(t))) return true;
//           }

//           return false;
//         })
//         // filter result by name and nim keyword
//         .reduce((result, s) => {
//           let score = 0;
//           let included = false;

//           // ===== FILTER BY PREFIX ====

//           // when no prefix given
//           if (alphabetic.length === 0 && numeric.length === 0) {
//             included = true;
//           }

//           // ===== FILTER BY NAME =====

//           // factor for prioritizing first keywords for ensuring name order
//           let factor = 1;
//           for (const t of alphabetic) {
//             const lowercased = s.name.toLowerCase();
//             if (lowercased.includes(t)) {
//               // calculate score
//               const tokenizedName = lowercased.split(' ');

//               let locationFactor = factor;
//               for (const n of tokenizedName) {
//                 if (n.startsWith(t)) score += 3 * locationFactor;
//                 if (n.endsWith(t)) score += 2 * locationFactor;
//                 locationFactor *= 0.9;
//               }

//               included = true;
//               factor *= 0.9;
//             }
//           }

//           // ===== FILTER BY NIM =====

//           for (const t of numeric) {
//             if (s.tpbID.includes(t) || (s.majorID && s.majorID.includes(t))) {
//               if (s.tpbID.startsWith(t) || (s.majorID && s.majorID.startsWith(t))) score += 3;
//               if (s.tpbID.endsWith(t) || (s.majorID && s.majorID.endsWith(t))) score += 2;
//               included = true;
//             }
//           }

//           if (included) {
//             result.push([s, score]);
//           }

//           return result;
//         }, [] as [Student, number][]);

//       const result = filtered.sort((s1, s2) => {
//         // first, sort by score
//         if (s1[1] > s2[1]) return -1;
//         if (s1[1] < s2[1]) return 1;

//         // defaults to sort by name
//         if (s1[0].name > s2[0].name) return 1;
//         if (s1[0].name < s2[0].name) return -1;
//         return 0;
//       });

//       this.result = result;
//     },
//     increaseLimit(value: number) {
//       this.limit += value;
//     },
//     clearCache() {
//       localStorage.removeItem('geprek-version');
//       localStorage.removeItem('geprek-query');
//       localStorage.removeItem('geprek-chips');
//       localStorage.removeItem('geprek-data');

//       window.location.reload();
//     },
//   },
// });
