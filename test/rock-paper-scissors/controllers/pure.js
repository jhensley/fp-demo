'use strict';

const Lab = require('lab');
const Code = require('code');
const Sinon = require('sinon');
const PureController = require('../../../rock-paper-scissors/controllers/pure');

const lab = exports.lab = Lab.script();

const testChoices = {
    test: {
        beats: 'test1'
    },
    test1: {
        beats: 'test2'
    },
    test2: {
        beats: 'test'
    }
};
let controller;

lab.experiment('Pure Controller', () => {

    lab.beforeEach((done) => {

        controller = new PureController();
        done();
    });

    lab.test('getRandomComputerChoice', (done) => {

        Code.expect(controller.getRandomComputerChoice(testChoices)).to.startWith('test');
        done();
    });

    lab.test('isComputerWinner - truthy', (done) => {

        Code.expect(controller.isComputerWinner(testChoices, 'test', 'test2')).to.equal(true);
        done();
    });

    lab.test('isComputerWinner - falsy', (done) => {

        Code.expect(controller.isComputerWinner(testChoices, 'test', 'test1')).to.equal(false);
        done();
    });

    lab.test('isPlayerWinner - truthy', (done) => {

        Code.expect(controller.isPlayerWinner(testChoices, 'test2', 'test')).to.equal(true);
        done();
    });

    lab.test('isPlayerWinner - falsy', (done) => {

        Code.expect(controller.isPlayerWinner(testChoices, 'test', 'test2')).to.equal(false);
        done();
    });

    lab.test('isTie - truthy', (done) => {

        Code.expect(controller.isTie(testChoices, 'test', 'test')).to.equal(true);
        done();
    });

    lab.test('isTie - falsy', (done) => {

        Code.expect(controller.isTie(testChoices, 'test', 'test1')).to.equal(false);
        done();
    });

    lab.test('getWinningChoice - player', (done) => {

        Code.expect(controller.getWinningChoice('Player', 'test', 'test1')).to.equal('test');
        done();
    });

    lab.test('getWinningChoice - computer', (done) => {

        Code.expect(controller.getWinningChoice('Computer', 'test', 'test1')).to.equal('test1');
        done();
    });

    lab.test('getWinningChoice - none', (done) => {

        Code.expect(controller.getWinningChoice(null, 'test', 'test')).to.be.undefined();
        done();
    });

    lab.test('getLosingChoice - player', (done) => {

        Code.expect(controller.getLosingChoice('Player', 'test', 'test1')).to.equal('test');
        done();
    });

    lab.test('getLosingChoice - computer', (done) => {

        Code.expect(controller.getLosingChoice('Computer', 'test', 'test1')).to.equal('test1');
        done();
    });

    lab.test('getLosingChoice - none', (done) => {

        Code.expect(controller.getLosingChoice(null, 'test', 'test')).to.be.undefined();
        done();
    });

    lab.test('getWinner - none', (done) => {

        Code.expect(controller.getWinner(testChoices, 'test', 'test')).to.be.undefined();
        done();
    });

    lab.test('getWinner - computer', (done) => {

        Code.expect(controller.getWinner(testChoices, 'test', 'test2')).to.equal('Computer');
        done();
    });

    lab.test('getWinner - player', (done) => {

        Code.expect(controller.getWinner(testChoices, 'test2', 'test')).to.equal('Player');
        done();
    });

    lab.test('getLoser - none', (done) => {

        Code.expect(controller.getLoser(testChoices, 'test', 'test')).to.be.undefined();
        done();
    });

    lab.test('getLoser - player', (done) => {

        Code.expect(controller.getLoser(testChoices, 'test', 'test2')).to.equal('Player');
        done();
    });

    lab.test('getLoser - computer', (done) => {

        Code.expect(controller.getLoser(testChoices, 'test2', 'test')).to.equal('Computer');
        done();
    });

    lab.test('startGameAndComputeWinner - data structure', (done) => {

        Sinon.stub(controller, 'getRandomComputerChoice', () => {

            return 'test2';
        });

        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').winner).to.equal('Computer');
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').loser).to.equal('Player');
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').tie).to.equal(false);
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').playerChoice).to.equal('test');
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').computerChoice).to.equal('test2');
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').winningChoice).to.equal('test2');
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').losingChoice).to.equal('test');
        done();
    });

    lab.test('startGameAndComputeWinner - undefined values', (done) => {

        Sinon.stub(controller, 'getRandomComputerChoice', () => {

            return 'test';
        });

        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').winner).to.be.undefined();
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').loser).to.be.undefined();
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').tie).to.equal(true);
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').playerChoice).to.equal('test');
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').computerChoice).to.equal('test');
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').winningChoice).to.be.undefined();
        Code.expect(controller.startGameAndComputeWinner(testChoices, 'test').losingChoice).to.be.undefined();
        done();
    });

});
