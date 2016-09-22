'use strict';

const app = require('../app');

const newGame = () => {
   return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

 const updateGame = function(index, value, game) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/games/'+ app.game.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
     "game": {
       "cell": {
         "index": index,
         "value": value,
       },
       "over": game,
     }
    }
  });
};

const getTotalGames = () => {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


module.exports = {
newGame,
updateGame,
getTotalGames
};
