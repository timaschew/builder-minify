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