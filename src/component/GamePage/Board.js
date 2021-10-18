import React from 'react';
import backgroundGame from '../../img/backgroundImage.png';
import {Image, ProgressBar, Button} from 'react-bootstrap';
import naruto from '../../img/naruto.png';
import sakura from '../../img/sakura.png';
import shuriken from '../../img/Shuriken.png';
import heal from '../../img/Heal.png';
import shield from '../../img/Shield.png';
import skill2naruto from '../../img/Skill2_naruto.png';
import 'animate.css';
// import skill2sakura from '../../img/Skill2_sakura.png';

export class Board extends React.Component {
  onClick(id) {
    this.props.moves.clickCell(id);
  }

  render() {
    let winner = '';
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    const cellStyle = {
      border: '1px solid #555',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'center',
    };

    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(
          <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
            {this.props.G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    const now1 = 40;
    const now2 = 60;
    const time = '21:45'
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundGame})`,
        }}
        className="gameBoard"
      >
        <div className="topButtonContainer">
          <Button bsPrefix="btn timeButton"
                  variant="primary">{time}</Button>
          <Button bsPrefix="btn surrenderButton"
                  variant="primary">Surrender</Button>
        </div>
        <div className="progressContainer">
          <ProgressBar  variant ="success" className="progressPlayer1" now={now1} label={`${now1}/100`}/>
          <ProgressBar  className="progressPlayer2"  now={now2} label={`${now2}/100`}/>
        </div>
        
        <Image src={skill2naruto} className="skill2naruto" id="skill2naruto"/>
        <Image src={shield} className="shield" id="shield"/>
        <div className="healContainer">
        <Image src={heal} className="heal" id="heal1"/>
        <Image src={heal} className="heal" id="heal2"/>
        <Image src={heal} className="heal" id="heal3"/>
        <Image src={heal} className="heal" id="heal4"/>
        </div>
        <Image src={naruto} className="player1" id ="player1" />
        <Image src={shuriken} className="shuriken" id="shuriken" />
        <Image src={sakura} className="player2" id = 'player2'/>
        
      </div>
    );
  }
}
