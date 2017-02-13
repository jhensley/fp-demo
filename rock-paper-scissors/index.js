'use strict';

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/{purity}',
        handler: function (request, reply) {

            const context = {
                purity: request.params.purity
            };
            reply.view('index', context);
        }
    });
    next();
};

exports.register.attributes = {
    name: 'index'
};
