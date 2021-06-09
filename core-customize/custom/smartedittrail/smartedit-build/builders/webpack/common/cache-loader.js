/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
const { resolve } = require('path');

module.exports = {
    loader: 'cache-loader',
    options: {
        cacheDirectory: resolve('node_modules/.cache')
    }
};
