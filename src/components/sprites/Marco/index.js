import React from 'react';
import {Sprite} from '@inlet/react-pixi';

const Marco = ({...props}) => {
  // TODO: change sprite based on which direction they're facing
  // let [direction, setDirection] = useState({direction: 'south'});
  return <Sprite image="/assets/marco.png" {...props} />;
};

export default Marco;
