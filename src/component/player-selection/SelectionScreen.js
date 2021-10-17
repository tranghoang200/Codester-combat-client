import PlayerCard from './PlayerCard';
import narutoPic from '../../img/naruto.png';
import sakuraPic from '../../img/sakura.png';
import leePic from '../../img/lee.png';
import blondePic from '../../img/blonde.png';
import background from '../../img/background_pick_char.png';
import {Row} from 'react-bootstrap';
import './SelectionScreen.css';

const characters = [
  {
    imgSrc: narutoPic,
    name: 'Naruto',
    // info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill1: 'Dmg Skill 1: 15',
    skill2: 'Dmg Skill 2: 25',
    heal: 'Heal: 15',
    shield: 'Shield: 5',
    backgroundColor: 'rgba(221, 129, 25, 0.548)',
    border: '3px solid orange',
    boxShadow:
      'rgba(212, 124, 24, 0.3) 0px 19px 38px, rgba(206, 104, 21, 0.22) 0px 15px 12px',
    opacity: '0.3',
  },
  {
    imgSrc: sakuraPic,
    name: 'Sakura',
    // info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill1: 'Dmg Skill 1: 10',
    skill2: 'Dmg Skill 2: 20',
    heal: 'Heal: 25',
    shield: 'Shield: 10',
    backgroundColor: 'rgba(233, 125, 227, 0.548)',
    border: '3px solid violet',
    boxShadow:
      'rgba(211, 102, 233, 0.3) 0px 19px 38px, rgba(213, 71, 241, 0.22) 0px 15px 12px',
    opacity: '0.3',
  },
  {
    imgSrc: leePic,
    name: 'Rock Lee',
    // info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill1: 'Dmg Skill 1: 15',
    skill2: 'Dmg Skill 2: 20',
    heal: 'Heal: 15',
    shield: 'Shield: 15',
    backgroundColor: 'rgba(114, 207, 138, 0.548)',
    border: '3px solid green',
    boxShadow:
      'rgba(65, 121, 43, 0.3) 0px 19px 38px, rgba(71, 241, 99, 0.22) 0px 15px 12px',
    opacity: '0.3',
  },
  {
    imgSrc: blondePic,
    name: 'Ino',
    // info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill1: 'Dmg Skill 1: 10',
    skill2: 'Dmg Skill 2: 15',
    heal: 'Heal: 20',
    shield: 'Shield: 20',
    backgroundColor: 'rgba(197, 160, 208, 0.548)',
    border: '3px solid violet',
    boxShadow:
      'rgba(143, 82, 223, 0.3) 0px 19px 38px, rgba(176, 94, 223, 0.22) 0px 15px 12px',
    opacity: '0.3',
  },
];

function SelectionScreen() {
  return (
    <div className="cardBox" style={{backgroundImage: `url(${background})`}}>
      <Row>
        <h1 className="chooseCharText">CHOOSE YOUR CHARACTER</h1>
      </Row>
      <Row>
        {characters.map((character) => {
          return (
            <PlayerCard
              src={character.imgSrc}
              name={character.name}
              skill1={character.skill1}
              skill2={character.skill2}
              heal={character.heal}
              shield={character.shield}
              backgroundColor={character.backgroundColor}
              border={character.border}
              boxShadow={character.boxShadow}
              opacity={character.opacity}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default SelectionScreen;
