import React, { useState, useEffect } from 'react';
import './MatchingScreen.css';
import { LobbyClient } from 'boardgame.io/client';
import { useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import * as pool from '../../Constant/graphql/pool';
import { useGlobal } from '../../globalContext';

function MatchingScreen() {
  const { state, dispatch } = useGlobal();
  console.log(state);

  const history = useHistory();
  const [pools, setPools] = useState([]);
  const { loadingUpdate, errorUpdate, dataUpdate } = useMutation(
    pool.UPDATE_POOL,
    {
      variables: {
        id: '616d5ec39a4a4c00d5f23bdd',
        record: {},
        user: '616d75c43bdf7fee0e2715f4',
      },
    }
  );

  const { loading, error, data } = useQuery(pool.GET_POOL);

  // if(data) {
  //   const { loadingUpdate, errorUpdate, dataUpdate } = useQuery(pool.UPDATE_POOL);
  // }

  useEffect(() => {
    if (loadingUpdate) console.log('Loading ...');
    else if (errorUpdate) console.log(errorUpdate);
    else {
      console.log(data);
      if (loading) console.log('Loading ...');
      else if (error) console.log(error);
      else {
        setPools(data.poolOne);
      }
    }
  }, [data, dataUpdate]);

  useEffect(() => {
    if (pools.users) {
      createRoom();
    }
  }, [pools]);

  const createRoom = async () => {
    const users = pools.users;
    console.log(users);
    if (users && users.length == 2) {
      dispatch({ type: 'updateUserId', payload: '616d75c43bdf7fee0e2715f4' });
    }

    const lobbyClient = new LobbyClient({ server: 'http://localhost:8000' });
    const games = await lobbyClient.listGames();
    // console.log(games);
    const { matchID } = await lobbyClient.createMatch(games[0], {
      numPlayers: 2,
    });
    localStorage.setItem('matchID', matchID);
    setTimeout(() => {
      history.push(`/player/${matchID}`);
    }, 5000);
  };

  return (
    <div className='matchingScreen'>
      <div className='night'>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
      </div>
      <div className='matchingText'>
        <div>M</div>
        <div>a</div>
        <div>t</div>
        <div>c</div>
        <div>h</div>
        <div>i</div>
        <div>n</div>
        <div>g</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    </div>
  );
}

export default MatchingScreen;
