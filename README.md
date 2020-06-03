# karma-jasmine-order-reporter

Reports Jasmine order seed that was used to randomize specs in Karma Runner

[![npm version](https://badge.fury.io/js/karma-jasmine-order-reporter.svg)](//npmjs.com/package/karma-jasmine-order-reporter)

Use this plugin to get information about `Jasmine` generated seed. It reports seed info twice:

1) When `Jasmine` started:
```
JASMINE ORDER REPORTER: Started with seed 12345
```

2) When `Jasmine` finished spec run:
```
JASMINE ORDER REPORTER: Done with seed 12345
```

This plugin can be useful in scenarios when you have flaky tests, that are failing only on specific seeds.
Also it will report seed on `Jasmine` start regardless of `Karma` or browser crash while tests run.

## Installation

```bash
$ npm install karma-jasmine-order-reporter --save-dev
```

or

```bash
$ yarn add karma-jasmine-order-reporter --dev
```

## Usage

Update your `karma.conf.js` file as follows:

```js
module.exports = function(config) {
  config.set({
    // code omitted for brevity
    plugins: [
      // other Karma Plugins
      'karma-jasmine-order-reporter' or `require('karma-jasmine-order-reporter')`
    ],
    reporters: [
      // other Karma Reporters
      'jasmine-order'
    ]
  });
};
```

## License

**[MIT](LICENSE)** Licensed
