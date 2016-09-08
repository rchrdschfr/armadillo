import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const ButtonGame = ({ onClickButton, numClicks }) => {
  return <div>
    In the meantime, let's see how many times you can click this button:
    <Button onClick={onClickButton} style={{ marginLeft: 10 }}>You clicked me {numClicks} times!</Button>
  </div>
}

export default ButtonGame;
