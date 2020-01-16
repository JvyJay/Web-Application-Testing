import React from 'react';

const Display = props => {
  return (
    <div>
      <h1>At Bat</h1>
      <p>Ball: {props.ball}</p>
      <p>Hit: {props.hit}</p>
      <p>Strikes: {props.strike}</p>
      <p>Foul: {props.foul}</p>
    </div>
  );
};

export default Display;
