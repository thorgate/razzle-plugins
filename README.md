[![Build Status][gh-actions-image]][gh-actions-url]


# Thorgate's collection of [Razzle](https://razzlejs.org/) plugins

This is combination of utility packages used at [Thorgate](https://thorgate.eu).

## Packages included:

Some of the packages are used by [Thorgate project template (SPA variant)](https://gitlab.com/thorgate-public/django-project-template).

* [razzle-plugin-long-term-caching](packages/razzle-plugin-long-term-caching/README.md) - Configure long-term caching for bundled assets.
* [razzle-plugin-modify-eslint-loader-config](packages/razzle-plugin-modify-eslint-loader-config/README.md) - Modify eslint loader config


## Running the example app

To run the example web application, install the dependencies and build the packages first:

Install dependencies
```
yarn install
yarn bootstrap
```

Start the example app (based on Razzle, see [readme](examples/example-app/README.md))
```
yarn start-example
```

The example app runs on [http://localhost:4000](http://localhost:4000)

Please check the [contributing guidelines](CONTRIBUTING.md) if you proceed with your own changes before you start.

## License

MIT © [Thorgate](http://github.com/thorgate)


[gh-actions-url]: https://github.com/thorgate/razzle-plugins/actions/workflows/main.yml
[gh-actions-image]: https://github.com/thorgate/razzle-plugins/actions/workflows/main.yml/badge.svg?branch=master
