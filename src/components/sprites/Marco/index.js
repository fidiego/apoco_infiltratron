import React, {useState} from 'react';
import {Sprite} from '@inlet/react-pixi';

const Marco = ({...props}) => {
  let [direction, setDirection] = useState({direction: 'south'});
  return <Sprite image="/assets/marco.png" {...props} />;
};

export default Marco;
