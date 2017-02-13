'use strict';

const PureController = require('../controllers/pure');

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/{purity}/go/{userChoice}',
        handler: function (request, reply) {

            const gameChoices = {
                rock: {
                    beats: 'scissors'
                },
                paper: {
                    beats: 'rock'
                },
                scissors: {
                    beats: 'paper'
                }
            };
            const controller = new PureController();

            reply.view('result', controller.startGameAndComputeWinner(gameChoices, request.params.userChoice));
        }
    });
    next();
};

exports.register.attributes = {
    name: 'pureController'
};
