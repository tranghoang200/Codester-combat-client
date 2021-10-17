import {Client} from 'boardgame.io/react';
import {CodesterCombat} from './Game';
import {Board} from './Board';

const GameScreen = Client({game: CodesterCombat, board: Board});

export default GameScreen;
