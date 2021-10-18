import {INVALID_MOVE} from 'boardgame.io/core';
import 'animate.css';

// Return true if `cells` is in a winning configuration.
function IsVictory(cells) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row) => {
    const symbols = row.map((i) => cells[i]);
    return symbols.every((i) => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some((i) => i === true);
}

export const CodesterCombat = {
  setup: () => ({cells: Array(9).fill(null)}),

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  moves: {
    skill1: (G, ctx, id) => {
      document.getElementById('shuriken').classList.add('skill1-player1');
      document.getElementById('player2').classList.add('wobble_effect'); 
      setTimeout( () => {
        document.getElementById('shuriken').classList.remove('skill1-player1') 
      }, 2000)   
      setTimeout( () => {
        document.getElementById('player2').classList.remove('wobble_effect');
      }, 5000) 
    },
    heal: (G, ctx, id) => {
      document.getElementById('heal1').classList.add('heal-player1');
      document.getElementById('heal2').classList.add('heal-player1');
      document.getElementById('heal3').classList.add('heal-player1');
      document.getElementById('heal4').classList.add('heal-player1');
      setTimeout( () => {
        document.getElementById('heal1').classList.remove('heal-player1') 
        document.getElementById('heal2').classList.remove('heal-player1');
        document.getElementById('heal3').classList.remove('heal-player1');
        document.getElementById('heal4').classList.remove('heal-player1');
      }, 1500)   
    },
    shield: (G, ctx, id) => {
      document.getElementById('shield').classList.add('shield-player1');
      setTimeout( () => {
        document.getElementById('shield').classList.remove('shield-player1') 
      }, 1500)   
    },
    skill2naruto: (G, ctx, id) => {
        document.getElementById('skill2naruto').classList.add('skill2naruto-player1');
        document.getElementById('player2').classList.add('wobble_effect'); 
      
      setTimeout( () => {
        document.getElementById('skill2naruto').classList.remove('skill2naruto-player1') 
      }, 1200) 
      setTimeout( () => {
        document.getElementById('player2').classList.remove('wobble_effect');
      }, 2700) 
    },
    skill2lee: (G, ctx, id) => {
      if (document.getElementById('player1').classList !== 'skill2lee-player1') {
        document.getElementById('player1').classList.add('skill2lee-player1');
        document.getElementById('player2').classList.add('wobble_effect'); 
      }     
      setTimeout( () => {
        document.getElementById('player1').classList.remove('skill2lee-player1');
      }, 2500) 
      setTimeout( () => {
        document.getElementById('player2').classList.remove('wobble_effect');
      }, 5000) 
    },
  },

  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return {winner: ctx.currentPlayer};
    }
  },

  ai: {
    enumerate: (G, ctx) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({move: 'clickCell', args: [i]});
        }
      }
      return moves;
    },
  },
};
