'use strict';

const app = require('../app');

const newGame = () => {
  console.log();
   return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

 const updateGame = function(index, value, game) {
  console.log('updateGame is running');
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

  });



};


module.exports = {
newGame,
updateGame,
getTotalGames
};
