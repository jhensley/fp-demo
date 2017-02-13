'use strict';

class PureController {

    startGameAndComputeWinner(choices, playerChoice) {

        const computerChoice = this.getRandomComputerChoice(choices);
        const winner = this.getWinner(choices, playerChoice, computerChoice);
        const loser = this.getLoser(choices, playerChoice, computerChoice);

        return {
            winner,
            loser,
            tie: this.isTie(choices, playerChoice, computerChoice),
            playerChoice,
            computerChoice,
            winningChoice: this.getWinningChoice(winner, playerChoice, computerChoice),
            losingChoice: this.getLosingChoice(loser, playerChoice, computerChoice)
        };

    }

    getWinner(choices, playerChoice, computerChoice) {

        if (this.isTie(choices, playerChoice, computerChoice)) {
            return;
        }
        return this.isComputerWinner(choices, playerChoice, computerChoice) === true ? 'Computer' : 'Player';
    }

    getLoser(choices, playerChoice, computerChoice) {

        if (this.isTie(choices, playerChoice, computerChoice)) {
            return;
        }
        return this.isComputerWinner(choices, playerChoice, computerChoice) === false ? 'Computer' : 'Player';
    }

    getRandomComputerChoice(choices) {

        const keys = Object.keys(choices);
        return keys[ keys.length * Math.random() << 0];
    }

    isPlayerWinner(choices, playerChoice, computerChoice) {

        return choices[playerChoice].beats === computerChoice;
    }

    isComputerWinner(choices, playerChoice, computerChoice) {

        return choices[computerChoice].beats === playerChoice;
    }

    isTie(choices, playerChoice, computerChoice) {

        return this.isPlayerWinner(choices, playerChoice, computerChoice) === this.isComputerWinner(choices, playerChoice, computerChoice);
    }

    getWinningChoice(winner, playerChoice, computerChoice) {

        if (winner === 'Player') {
            return playerChoice;
        }
        else if (winner === 'Computer') {
            return computerChoice;
        }

        return;
    }

    getLosingChoice(loser, playerChoice, computerChoice) {

        if (loser === 'Player') {
            return playerChoice;
        }
        else if (loser === 'Computer') {
            return computerChoice;
        }

        return;
    }

}

module.exports = PureController;
