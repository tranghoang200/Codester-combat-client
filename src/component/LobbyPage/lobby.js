import { ButtonGroup, Button, Form, Row, Col } from 'react-bootstrap';
import './lobby.css';
import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useGlobal } from '../../globalContext';

const LobbyPage = () => {
  const history = useHistory();
  const { state, dispatch } = useGlobal();
  console.log(state);
  useEffect(() => {
    dispatch({ type: 'updateUserId', payload: '616d75c43bdf7fee0e2715f4' });
    dispatch({ type: 'updatePlayer1Id', payload: '616d75c43bdf7fee0e2715f4' });
    dispatch({ type: 'updatePlayer2Id', payload: '616d75ea3bdf7fee0e2715f9' });
  }, []);
  return (
    <div className='lobby-container'>
      <h1 style={{ fontSize: '6rem' }}>CODESTER COMBAT</h1>
      <Form>
        <Row className='align-items-center'>
          <Col sm={3} className='my-1'>
            <Form.Label htmlFor='inlineFormInputName' visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id='inlineFormInputName' placeholder='Jane Doe' />
          </Col>

          <Button
            bsPrefix='btn button-lobby mt-5'
            onClick={() => history.push(`/matching`)}
          >
            Play
          </Button>
        </Row>
      </Form>
      <ButtonGroup bsPrefix='btn-group button-group-lobby'>
        <Button bsPrefix='btn button-lobby mt-5'>Leaderboard</Button>
      </ButtonGroup>
    </div>
  );
};

export default LobbyPage;
