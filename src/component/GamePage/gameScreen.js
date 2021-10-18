import {Client} from 'boardgame.io/react';
import {CodesterComba} from './game';
import Board from './Board';
import {SocketIO} from 'boardgame.io/multiplayer';

const GameScreen = Client({
  game: CodesterComba, 
  board: Board,
  debug: true,
  numPlayers: 2,
  multiplayer: SocketIO({server: 'localhost:8000'}),
  matchID: localStorage.getItem("matchID")
});

export default GameScreen;
