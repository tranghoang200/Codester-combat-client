import React from 'react';
import backgroundGame from '../../img/backgroundImage.png';
import {Image} from 'react-bootstrap';
import naruto from '../../img/naruto.png';
import sakura from '../../img/sakura.png';
import shuriken from '../../img/Shuriken.png';

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

    return (
      <div
        style={{
          backgroundImage: `url(${backgroundGame})`,
        }}
        className="gameBoard"
      >
        <Image src={naruto} className="player1" />
        <Image src={shuriken} className="shuriken" id="shuriken" />
        <Image src={sakura} className="player2" />
      </div>
    );
  }
}
