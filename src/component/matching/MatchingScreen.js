import React, { useState, useEffect } from "react";
import "./MatchingScreen.css";
import { LobbyClient } from "boardgame.io/client";
import { useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import * as pool from "../../Constant/graphql/pool";

function MatchingScreen() {
  const history = useHistory();
  const [pools, setPools] = useState([]);
  const { loadingUpdate, errorUpdate, dataUpdate } = useMutation(
    pool.UPDATE_POOL,
    {
      variables: {
        id: "616d5ec39a4a4c00d5f23bdd",
        record: {},
        user: localStorage.getItem("pLayer1ID"),
      },
    }
  );

  const { loading, error, data } = useQuery(pool.GET_POOL);

  // if(data) {
  //   const { loadingUpdate, errorUpdate, dataUpdate } = useQuery(pool.UPDATE_POOL);
  // }

  useEffect(() => {
    if (loadingUpdate) console.log("Loading ...");
    else if (errorUpdate) console.log(errorUpdate);
    else {
      console.log(data);
      if (loading) console.log("Loading ...");
      else if (error) console.log(error);
      else {
        setPools(data.poolOne);
      }
    }
  }, [data, dataUpdate]);

  const createRoom = async () => {
    const users = pools.users;
    console.log(users)
    if (users && users.length == 2) {
      localStorage.setItem("player1ID", users[0]["_id"]);
      localStorage.setItem("player2ID", users[1]["_id"]);
    }

    const lobbyClient = new LobbyClient({ server: "http://localhost:8000" });
    const games = await lobbyClient.listGames();
    console.log(games);
    const { matchID } = await lobbyClient.createMatch(games[0], {
      numPlayers: 2,
    });
    localStorage.setItem("matchID", matchID);
    setTimeout(() => {
      history.push(`/player/${matchID}`);
    }, 5000)
  };
  createRoom();

  return (
    <div className="matchingScreen">
      <div className="night">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="matchingText">
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
