'use strict';

module.exports = function addCompletedGameToPlayer(player, score) {

    player.games.push({
        won: score.player > score.computer ? true : false,
        tie: score.player === score.computer ? true : false
    });
    return player;
};
