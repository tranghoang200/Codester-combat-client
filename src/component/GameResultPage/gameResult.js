import React, {useState, useEffect} from 'react';
import background from '../../img/background_pick_char.png';
import {
  Image, Row, Col
} from 'react-bootstrap';

import headerImage from '../../img/Victory.png'
import './gameResult.css'
import { useQuery } from '@apollo/client';
import * as user from '../../Constant/graphql/user';


const GameResult = () => { 
  const { loading, error, data } = useQuery(user.GET_ALL_USERS);
  const [userList, setUserList] = useState([])

  useEffect(() => {
    if (loading) console.log('Loading ...');
    else if (error) console.log(error);
    else {
      console.log(data);
      setUserList(data.userMany);
    }
  }, [data])
  const renderUser = () => {
    return userList.map((item) => {
      return <Row className="leaderboard-row">
      <Col>1</Col>
      <Col>{item.name}</Col>
      <Col>Inter</Col>
      <Col>{item.point}</Col>
    </Row>
    })
  }


  return (<div className="cardBox" style={{backgroundImage: `url(${background})`}}>
    <Image src={headerImage} />
    <div className="leaderboard-container">
      <Row className="leaderboard-row">
        <Col>Rank</Col>
        <Col>Name</Col>
        <Col> Tier</Col>
        <Col>Point</Col>
      </Row>
      {renderUser()}
    </div>
  </div>)
}

export default GameResult;