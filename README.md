# wallaby-gulp-adapter
Adapter from gulp plugin to wallaby.js preprocessor

# Installation
```
npm install --save-dev
```

# Usage example

In your wallaby.js

``` JavaScript
    preprocessors: {
      'app/**/*.ts': require('wallaby-gulp-adapter')(require('gulp-inline-ng2-template')({base: 'app', target: 'es5'}))
    },
```
