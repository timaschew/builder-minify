# builder-minify

minify for component builder2.js 

wrapper for https://github.com/ianstormtaylor/minify

## install
    npm install component-builder-minify --save

## usage

```js
var minify = require('component-builder-minify');

// js example
.use('js', build.plugins.js(), minify.js())

// css example
.use('css', build.plugins.css(), minify.css())
```

## problems
this builder uses uglifyjs and it could fail for conditional `require()` calls
see: https://github.com/component/builder2.js/issues/74

so you should better use [ianstormtaylor/minify](https://github.com/ianstormtaylor/minify)  within the `builder.scripts().end()` and `builder.styles().end()` callback before writing the output into a file.
