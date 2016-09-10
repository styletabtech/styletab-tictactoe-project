'use strict';

const app = require('../app');

const newGame = (data) => {
  console.log(data); // to check if this is working
   return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "id": "",
        "cells": ["","","","","","","","",""],
        "over": false,
        "player_x": {
          "id": "",
          "email": "and@and.com"
        },
        "player_o": null
      }
    }


  });
};

const updateGame = function(i,v,g){
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/games/' + app.game.id,
    headers: {
      Authorization: 'Token token=' + app.game.token,
    },
    data: {
     "game": {
       "cell": {
         "index": i,
         "value": v
       },
       "over": g
     }
    }
  });
};


module.exports = {
newGame,
updateGame,
};
