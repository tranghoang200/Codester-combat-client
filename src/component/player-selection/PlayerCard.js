import React from 'react';
import {Card, Col, Button} from "react-bootstrap";
import './PlayerCard.css';

function PlayerCard(props) {
    return <Col className="cardContainer"><Card  className="playerCard">
                <div className="imgContainer"
                    style={{backgroundColor: `${props.backgroundColor}`, border: `${props.border}`, boxShadow: `${props.boxShadow}`}}>
                    <Card.Img className="cardImg" variant="top" src={props.src} />
                </div>  
                <Card.Body className="cardBody">
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text style={{textAlign: 'left'}}>
                        <p className="skill">{props.skill1}</p>
                        <p className="skill">{props.skill2}</p>
                        <p className="skill">{props.heal}</p>
                        <p className="skill">{props.shield}</p>
                    </Card.Text>
                    <Button bsPrefix="btn chooseButton"
                            style={{backgroundColor: 'black', 
                                    borderRadius: '20px',
                                    border: '2px solid white',
                                    }} 
                            variant="primary">Choose</Button>
                </Card.Body>
            </Card></Col>
}

export default PlayerCard;