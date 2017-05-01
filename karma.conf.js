// Karma configuration
// Generated on Fri Nov 04 2016 21:19:27 GMT+0530 (Sri Lanka Standard Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      './node_modules/knockout/build/output/knockout-latest.debug.js',
      './node_modules/chai/chai.js',
      // 'src/program.enrollmentform.common.js',
      // 'src/program.enrollmentform.*.js',
      './src/query-builder.standalone.js',
      './src/query.builder.wrapper.js',
      // 'src/company.search.js',
      //'src/ko/viewModel.js',
      /*'test/*.spec.js',*/
      './src/builder.plugin.js',
      './test/querybuilder.spec.js',
      './test/builder.spec.js',
      {
        pattern: './test/mocks/*.html',
        watched: true,
        served: true,
        included: false
      },
      {
        pattern: './test/mocks/*.json',
        watched: true,
        served: true,
        included: false
      },
    ],


    // list of files to exclude
    exclude: [
      './node_modules'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ /*'PhantomJS',  'Chrome', 'Firefox'*/ 'ChromeDebugging'],

    plugins: [
      // Karma will require() these plugins
      "karma-chrome-launcher",
      //"karma-firefox-launcher",
      //"karma-ie-launcher",
      "karma-jasmine",
      "karma-jquery-jasmine",
      //"karma-phantomjs-launcher",
      "karma-spec-reporter",
      //"karma-xml-reporter",    
    ],
    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9333']
      }
    },



    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};