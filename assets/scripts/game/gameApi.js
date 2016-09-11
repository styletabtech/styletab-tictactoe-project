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
  //   data,

     // {
    //   "game": {
    //     "id": "",
    //     "cells": ["","","","","","","","",""],
    //     "over": false,
    //     "player_x": {
    //       "id": "",
    //       "email": ""
    //     },
    //     "player_o": null
    //   }
    // }

  });
};

const updateGame = function(index, value, game) {
  console.log(index, value, game);
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/games/'+ app.game.id,
    headers: {
      Authorization: 'Token token=' + app.game.token,
    },
    data: {
     "game": {
       "cell": {
         "index": index,
         "value": value,
       },
       "over": game
     }
    }
  });
};


module.exports = {
newGame,
updateGame,
};
