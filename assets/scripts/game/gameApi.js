'use strict';

const app = require('../app');

const newGame = () => {
  console.log(); // to check if this is working
   return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateGame = function(index, value, game) {
  console.log(index, value, game);
  console.log('app is', app);
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


module.exports = {
newGame,
updateGame,
};
