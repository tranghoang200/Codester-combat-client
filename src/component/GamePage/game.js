import { INVALID_MOVE } from 'boardgame.io/core';
import { useQuery } from '@apollo/client';
import * as user from '../../Constant/graphql/user';
import * as champ from '../../Constant/graphql/champ';

const GetGameSetUp = () => {
  const setup = {};
  // const { loading, error, data } = useQuery(user.GET_USER_BY_ID, {
  //   variables: { id: localStorage.getItem('player1ID') }
  // });
  // const { loadingChamp, errorChamp, dataChamp } = useQuery(champ.GET_CHAMP_BY_ID, {
  //   variables: { id: localStorage.getItem("champID") }
  // });

  // if (loading) console.log('Loading ...');
  //   else if (error) console.log(error);
  //   else {
  //     setup["player1"] = data.userById;

  // if (loadingChamp) console.log('Loading ...');
  // else if (errorChamp) console.log(error);
  // else {
  // setup["player1"]["champ"] = dataChamp.champById;
  // }

  //   }

  //   console.log(setup);
  return setup;

  // if (loading) console.log('Loading ...');
  //   else if (error) console.log(error);
  //   else {
  //     console.log(data);
  //     setChampion(data.champById);
  //   }
};

export const CodesterCombat = {
  setup: () => GetGameSetUp(),

  ctx: {
    turn: 0,
    currentPlayer: '0',
    numPlayers: 2,
  },

  turn: {
    minMoves: 1,
    maxMoves: 1,
    // activePlayers: ActivePlayers.ALL
  },

  moves: {
    skill1: (G, ctx, id) => {
      document.getElementById('shuriken').classList.add('skill1-player1');
      document.getElementById('player2').classList.add('wobble_effect');
      setTimeout(() => {
        document.getElementById('shuriken').classList.remove('skill1-player1');
      }, 2000);
      setTimeout(() => {
        document.getElementById('player2').classList.remove('wobble_effect');
      }, 5000);
    },
    heal: (G, ctx, id) => {
      document.getElementById('heal1').classList.add('heal-player1');
      document.getElementById('heal2').classList.add('heal-player1');
      document.getElementById('heal3').classList.add('heal-player1');
      document.getElementById('heal4').classList.add('heal-player1');
      setTimeout(() => {
        document.getElementById('heal1').classList.remove('heal-player1');
        document.getElementById('heal2').classList.remove('heal-player1');
        document.getElementById('heal3').classList.remove('heal-player1');
        document.getElementById('heal4').classList.remove('heal-player1');
      }, 1500);
    },
    shield: (G, ctx, id) => {
      document.getElementById('shield').classList.add('shield-player1');
      setTimeout(() => {
        document.getElementById('shield').classList.remove('shield-player1');
      }, 1500);
    },
    skill2naruto: (G, ctx, id) => {
      document
        .getElementById('skill2naruto')
        .classList.add('skill2naruto-player1');
      document.getElementById('player2').classList.add('wobble_effect');

      setTimeout(() => {
        document
          .getElementById('skill2naruto')
          .classList.remove('skill2naruto-player1');
      }, 1200);
      setTimeout(() => {
        document.getElementById('player2').classList.remove('wobble_effect');
      }, 2700);
    },
    skill2lee: (G, ctx, id) => {
      if (
        document.getElementById('player1').classList !== 'skill2lee-player1'
      ) {
        document.getElementById('player1').classList.add('skill2lee-player1');
        document.getElementById('player2').classList.add('wobble_effect');
      }
      setTimeout(() => {
        document
          .getElementById('player1')
          .classList.remove('skill2lee-player1');
      }, 2500);
      setTimeout(() => {
        document.getElementById('player2').classList.remove('wobble_effect');
      }, 5000);
    },
  },

  endIf: (G, ctx) => {
    // if (IsVictory(G.cells)) {
    //   return { winner: ctx.currentPlayer };
    // }
  },

  ai: {
    enumerate: (G, ctx) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i] });
        }
      }
      return moves;
    },
  },
};
