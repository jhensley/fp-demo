'use strict';

const Confidence = require('confidence');
const Config = require('./config');

const criteria = {
    env: process.env.NODE_ENV
};

const manifest = {
    $meta: 'This file defines FP Demo',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                security: true
            }
        }
    },
    connections: [{
        port: Config.get('/port/api'),
        labels: ['api']
    }],
    registrations: [{
        plugin: 'vision'
    }, {
        plugin: {
            register: 'visionary',
            options: {
                engines: { 'html': 'handlebars' },
                path: './rock-paper-scissors/views'
            }
        }
    }, {
        plugin: './rock-paper-scissors/index'
    }, {
        plugin: './rock-paper-scissors/api/pure'
    }]
};

const store = new Confidence.Store(manifest);

exports.get = function (key) {

    return store.get(key, criteria);
};

exports.meta = function (key) {

    return store.meta(key, criteria);
};
