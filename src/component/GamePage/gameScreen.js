import {Client} from 'boardgame.io/react';
import {CodesterCombat} from './game';
import {Board} from './Board';

const GameScreen = Client({game: CodesterCombat, board: Board});

export default GameScreen;
