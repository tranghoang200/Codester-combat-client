import React from 'react';
import background from '../../img/background_pick_char.png';
import {
  Image,

} from 'react-bootstrap';

import headerImage from '../../img/Victory.png'


const GameResult = () => { 
  return (<div className="cardBox" style={{backgroundImage: `url(${background})`}}>
    <div>
    <Image src={headerImage} />
    </div>
  </div>)
}

export default GameResult;