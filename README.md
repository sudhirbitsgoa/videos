# Karma Jasmine Unit test
JavaScript's loosely typed expression power has to be taken care with perfect unit testing. Karma Jasmine and angular-mock gives best capabilities to write unit test.

# Set up
```
npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher --save-dev
bower install angular-mocks --save-dev
```

Test case configuration should be added in karma.conf.js

```
./node_modules/karma/bin/karms init
```
This will prompt to select testing framework. 
Importantly it asks for source and test files location. Follow the order in which the javascript files are placed in index.html
Also include angular-mocks.js immediate after angular.js
Test files are generally placed in test folder.

```
// Karma configuration
// Generated on Tue Jul 05 2016 19:35:43 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/flexslider/flexslider.css',
      'css/app.min.css',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/oclazyload/dist/ocLazyLoad.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/bootstrap/bootstrap.min.js',
      'bower_components/bootstrap/bootstrap-hover-dropdown.min.js',
      'bower_components/bootstrap/bootstrap-select.js',
      'bower_components/angular-bootstrap/ui-bootstrap.min.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/ng-notifications-bar/dist/ngNotificationsBar.min.css',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/ng-infinite-scroll/build/ng-infinite-scroll.js',
      'bower_components/ng-notifications-bar/dist/ngNotificationsBar.min.js',
      'app/templates/**/*.html',
      'app/js/app.js',
      'app/js/routes/routes.js',
      'app/js/**/*.js',
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```

# Run test cases
```
./node_modules/karma/bin/karma start
```
This will load all files listed in karma.conf.js file in to the browser and will run test cases.
Karma framework gives and option to debug our test cases using debug options.

adding 
```
debugger;
```
in between javascript code will stop the code at that point in browser when launched in developer mode.

Happy testing :)
