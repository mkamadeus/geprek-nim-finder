# Geprek NIM Finder v2

## Stack

Bootstrapped with Create Snowpack App (CSA).
Other noteable stacks include : React, TailwindCSS, ESLint, Prettier.

## Improvements from the First Iteration

- No longer using a backend service, but instead using local storage to cache student data via CDN (jsDelivr).
- Removed regex usage, as regex tend to be slow
- Automated CI/CD deployment using GitHub Actions and Firebase Hosting
- Lighter bundle size using Snowpack
- Chips (using `?query?`) to filter out data
- More reliable search; using a simple sorting algorithm to sort based on relevancy to the query
- Added more students to the list
- Dark mode, because why not!

## Contributors

<a href="https://github.com/mkamadeus/nim-finder-v2/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mkamadeus/nim-finder-v2" />
</a>
