// module.exports = {
//   // Type check TypeScript files
//   '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

//   // Lint then format TypeScript and JavaScript files
//   '**/*.(ts|tsx|js)': (filenames) => [
//     `yarn eslint --fix ${filenames.join(' ')}`,
//     `yarn prettier --write ${filenames.join(' ')}`,
//   ],

//   // Format MarkDown and JSON
//   '**/*.(md|json)': (filenames) =>
//     `yarn prettier --write ${filenames.join(' ')}`,
// };
const prettierCommand = 'prettier --write';

module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', prettierCommand],
  '**/*.{md,json}': [prettierCommand],
  '**/*.{css,scss}': ['stylelint --fix', prettierCommand],
};
