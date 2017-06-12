# starter.reactjs
A starter for developing react project.

## Tools configured/installed

- [Babel](http://babeljs.io)
- [EditorConfig](http://editorconfig.com)
- [Enzyme](http://airbnb.io/enzyme)
- [ESLint](http://eslint.org)
- [Jest](https://facebook.github.io/jest)
- [JSDoc](http://usejsdoc.org)
- [json-lint](https://github.com/zaach/jsonlint)
- [Grunt](http://gruntjs.com)
- [Plato](https://github.com/es-analysis/plato)
- [sass-lint](https://github.com/sasstools/sass-lint)
- [Storybook](https://storybook.js.org)
- [Webpack 2](https://webpack.js.org)

### Todo
* Add [Selenium](http://www.seleniumhq.org/) for Integration tests.
* Add a styleguide generator
* Create production build


## Usage

``` 
git clone https://github.com/AbrahamTewa/starter.reactjs.git
cd starter.reactjs
npm install
npm run build
```

Then launch the `build/index.html` file in your browser.

## Available commands

### `npm run analysis`
Run a code analysis using [Plato](https://github.com/es-analysis/plato).
The output result is stored in the `reports/analysis` directory.

### `npm run build`
Run the build of the application.
The builder will create a new `build/` folder in which the build will be added.

#### Build steps

1. Lint the repository
    a. [eslint](http://eslint.org/)
    b. [sass-lint](https://github.com/sasstools/sass-lint) 
    c. [json-lint](https://github.com/zaach/jsonlint)
2. Clean the `build` folder
3. Copy `src/index.html` into the `build` folder
4. Make the build (using webpack)
5. Creating SASS files

### `npm run doc`
Build the documentation of the project :
- [JSDoc](http://usejsdoc.org)
- [Storybook](https://storybook.js.org)

To build individually each project, use on of the following:
* `npm run doc:jsdoc`
* `npm run doc:storybook` 

### `npm run lint`
Running all linters on the source files and the tooling files (e.g `.babelrc`).

The linters are :
* [eslint](http://eslint.org/)
* [sass-lint](https://github.com/sasstools/sass-lint) 
* [json-lint](https://github.com/zaach/jsonlint)

### `npm start`
Start a simple [express](http://expressjs.com/) server to serve the HTML file.

### `npm test`
Alias: `npm run test`

Execute all unit tests.
Tests use [jest](https://facebook.github.io/jest/) and [enzyme](http://airbnb.io/enzyme/).

### `npm run test-u`

Like `npm test`, but will also update [jest](https://facebook.github.io/jest/) snapshots.

### `npm run test-cov`
The `test-cov` will run tests and coverage.

### `npm watch`
Will run a [webpack](https://webpack.js.org/) in watch mode to rebuild the app each time a file in the `src` folder is updated.
The [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) (HMR) is enabled on javascript and sass files. Before each reloads, [eslint](http://eslint.org/) and [sass-lint](https://github.com/sasstools/sass-lint) are runned.

### `npm watch:storybook`
Enable [storybook](https://storybook.js.org) development server. The server will watch file modifications and update in real time your
storybook using the [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) mechanism.
Storybook will be served on [`http://localhost:9001`](localhost:9001).
