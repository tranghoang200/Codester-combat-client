import React, { useState, useEffect } from 'react';
import GameScreen from './gameScreen';
import {
  Row,
  Col,
  Container,
  Button,
  Image,
  Tabs,
  Tab,
  Form,
} from 'react-bootstrap';
import ProblemCodingSection from './problemCodingSection';
import './game.css';
import skill1Icon from '../../img/skill1.png';
import { useQuery } from '@apollo/client';
import * as champ from '../../Constant/graphql/champ';

const GamePage = () => {
  const [key, setKey] = useState('input');
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [champion, setChampion] = useState({});
  console.log(localStorage.getItem('champID'))
  const { loading, error, data } = useQuery(champ.GET_CHAMP_BY_ID, {
    variables: { id: localStorage.getItem('champID') },
  });

  useEffect(() => {
    if (loading) console.log('Loading ...');
    else if (error) console.log(error);
    else {
      console.log(data);
      setChampion(data.champById);
    }
  }, [data]);

  return (
    <div>
      <GameScreen />
      <Row style={{ height: '55vh' }}>
        <Col md={8}>
          <ProblemCodingSection input={input} setOutput={setOutput} />
        </Col>
        <Col md={4}>
          <div>
            <Container className="section" style={{ paddingTop: '5%' }}>
              <Row>
                <Col className="centerItem">
                  <Button variant="dark" bsPrefix="btn skillButton">
                    <Image src={skill1Icon} className="iconSpacing" />
                    Skill 1
                  </Button>
                  <p>Dam: {champion.skill1}</p>
                </Col>
                <Col className="centerItem">
                  <Button variant="dark" bsPrefix="btn skillButton">
                    <Image src={skill1Icon} className="iconSpacing" />
                    Skill 2
                  </Button>
                  <p>Dam: {champion.skill2}</p>
                </Col>
              </Row>
              <Row>
                <Col className="centerItem">
                  <Button variant="dark" bsPrefix="btn skillButton">
                    <Image src={skill1Icon} className="iconSpacing" />
                    Heal
                  </Button>
                  <p>+{champion.heal} HP</p>
                </Col>
                <Col className="centerItem">
                  <Button variant="dark" bsPrefix="btn skillButton">
                    <Image src={skill1Icon} className="iconSpacing" />
                    Shield
                  </Button>
                  <p>-{champion.shield} Dam</p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section" style={{ height: '10%' }}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="input" title="Input">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </Tab>
              <Tab eventKey="output" title="Output">
                {output}
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GamePage;
