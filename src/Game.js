import React from 'react';
const { firebase, ChessBoard, Chess } = window;

class Game extends React.Component  {
  
 /*  constructor({ match: { params: { token } } }) {
    super();
    this.state = { token };
    this.engine = new Chess();
  } */

  render() {
    return (
      <div>
        <div id="board" style={{width: "400px"}}>
        </div>
        <div>
          
        </div>
      </div>
    );
  }

  componentDidMount() {
    const board = ChessBoard('board', 'start');
  }
}

export default Game;