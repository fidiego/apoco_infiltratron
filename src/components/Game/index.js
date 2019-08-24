import React, {useState, useEffect} from 'react';

import {Stage, Container, Sprite} from '@inlet/react-pixi';
import Marco from '../sprites/Marco';

import './game.css';

const Game = ({...props}) => {
  const [app, setApp] = useState({initializing: true, app: null});
  const [playerPosition, setPlayerPosition] = useState({x: 150, y: 150});

  const initializeApp = () => {
    setApp({initializing: false});
  };

  useEffect(() => {
    initializeApp();
  }, []);

  const moveDown = () => {
    let {y} = playerPosition;
    setPlayerPosition({y: y + 2, x: playerPosition.x});
  };

  const moveUp = () => {
    let {y} = playerPosition;
    setPlayerPosition({y: y - 2, x: playerPosition.x});
  };
  const moveLeft = () => {
    let {x} = playerPosition;
    setPlayerPosition({x: x - 2, y: playerPosition.y});
  };

  const moveRight = () => {
    let {x} = playerPosition;
    setPlayerPosition({x: x + 2, y: playerPosition.y});
  };

  const keyMapping = {
    37: moveLeft,
    38: moveUp,
    39: moveRight,
    40: moveDown,
  };

  const onKeyPress = e => {
    if (Object.keys(keyMapping).includes(String(e.keyCode))) {
      keyMapping[String(e.keyCode)]();
    }
  };

  document.onkeydown = onKeyPress;

  if (app.initializing) {
    return (
      <div
        className="loader"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          fontSize: '3rem',
        }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="pixi-wrapper">
        <Stage width={600} height={600} options={{backgroundColor: 0x1d2230}}>
          <Container x={300} y={300} id="player-container">
            <Marco x={playerPosition.x} y={playerPosition.y} anchor={0.5} />
          </Container>
        </Stage>
      </div>
    </div>
  );
};

export default Game;
