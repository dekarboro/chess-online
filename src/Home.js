import React from 'react';
import Utils from './utils';

const { firebase } = window;

function Home() {  
  return (
    <div>
      <h1>Create a game:</h1>
      <button onClick={createGame}>Create</button>
    </div>
  );
}


const createGame = () => {
  const newGame = {
    p1_token: Utils.token(),
    p2_token: Utils.token()
  };

  const game = firebase.database().ref("games").push();

  game
    .set(newGame).then(() => {
      window.location = `#/${newGame.p1_token}`;
    },
      err => { throw err;
    });
}

export default Home;