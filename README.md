[![Build Status][gh-actions-image]][gh-actions-url]
[![NPM version][npm-image]][npm-url]


# Thorgate's collection of [Razzle](https://razzlejs.org/) plugins

This is combination of utility packages used at [Thorgate](https://thorgate.eu).

## Packages included:

Some of the packages are used by [Thorgate project template (SPA variant)](https://gitlab.com/thorgate-public/django-project-template/tree/spa).

* [razzle-plugin-modify-eslint-loader-config](packages/razzle-plugin-modify-eslint-loader-config/README.md) - Long term caching plugin to separate vendor chunk and include runtime chunk.
* [razzle-plugin-modify-eslint-loader-config](packages/razzle-plugin-modify-eslint-loader-config/README.md) - Modify eslint loader config


## Running the example app

To run the example web application, install the dependencies and build the packages first:

Install dependencies
```
yarn install
yarn bootstrap
```

Build the packages
```
yarn build
```

Start the example app (based on Razzle, see [readme](examples/example-app/README.md))
```
yarn start-example
```

The example app runs on [http://localhost:4000](http://localhost:4000)

Please check the [contributing guidelines](CONTRIBUTING.md) if you proceed with your own changes before you start.

## License

MIT © [Thorgate](http://github.com/thorgate)


[npm-url]: https://npmjs.org/package/tg-razzle-plugins
[npm-image]: https://img.shields.io/npm/v/tg-razzle-plugins.svg?style=flat-square

[gh-actions-url]: https://github.com/thorgate/razzle-plugins/actions/workflows/main.yml
[gh-actions-image]: https://github.com/thorgate/razzle-plugins/actions/workflows/main.yml/badge.svg?branch=master
