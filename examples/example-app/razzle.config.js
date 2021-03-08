'use strict';

module.exports = {
    plugins: [
        'eslint',
        'modify-eslint-loader-config',
        {
            name: 'long-term-caching',
            options: {
                cachingOptions: 'split-size',
            },
        },
    ],
};
