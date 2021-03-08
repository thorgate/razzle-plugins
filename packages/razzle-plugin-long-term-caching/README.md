[![NPM version][npm-image]][npm-url]
[![Build Status][gh-actions-image]][gh-actions-url]

# razzle-plugin-long-term-caching

This package contains a plugin for enabling long-term caching with Razzle

This plugin makes Webpack generate 3 chunks: `runtime`, `vendors` and `client`.

Don't forget to add `REACT_BUNDLE_PATH=/static/js/vendors.js` to `.env` or `.env.development`
to get built-in error overlay.


## Usage in Razzle Projects

```
yarn add razzle-plugin-long-term-caching
```

Using the plugin with the default options

```js
// razzle.config.js

module.exports = {
  plugins: ['long-term-caching'],
};
```

### With custom options:

```js
// razzle.config.js

module.exports = {
  plugins: [
    {
      name: 'long-term-caching',
      options: {
        runtimeChunk: 'single',
      },
    },
  ],
};
```

## Options

**runtimeChunk: _object_ _string_ _boolean_** (defaults: 'single')

Customize runtime chunk behaviour, this is directly provided to Webpack config

**cachingOptions: _boolean_ _object_ _string_** (defaults: false)

- false: Use single vendors chunk.
- true: Enable per-package vendor (node_modules) splitting for bigger initial download but smaller patches later on. This option works best with HTTP/2.
- 'split-size': Use Webpack automatic size limiting options based on `sizeOptions`.
- Object: Manually decide how vendor packages are split. Example structure `{ [chunkName]: Array | Regex }` 
- Array: Manually decide how vendor packages are split. Example structure `[ package names used splitting ]` 

**vendorsChunkName: _string_** (defaults: 'vendors')

**sizeOptions: _Object_** (defaults: { minSize: 30000, maxSize: 200000 })

Vendors chunk name.

## License

MIT © [Thorgate](http://github.com/thorgate)


[npm-url]: https://npmjs.org/package/razzle-plugin-long-term-caching
[npm-image]: https://img.shields.io/npm/v/razzle-plugin-long-term-caching.svg?style=flat-square


[gh-actions-url]: https://github.com/thorgate/razzle-plugins/actions/workflows/main.yml
[gh-actions-image]: https://github.com/thorgate/razzle-plugins/actions/workflows/main.yml/badge.svg?branch=master

