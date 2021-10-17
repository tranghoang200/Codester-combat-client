import {Client} from 'boardgame.io/react';
import {CodesterCombat} from './Game';
import {Board} from './Board';
import {SocketIO} from 'boardgame.io/multiplayer';

const GameScreen = Client({
  game: CodesterCombat,
  board: Board,
  debug: true,
  numPlayers: 2,
  multiplayer: SocketIO({server: 'localhost:8000'}),
});

export default GameScreen;
