import React from 'react';

const Dashboard = props => {
  return (
    <>
      <button onClick={props.ball}>Ball +1</button>
      <button onClick={props.hit}>Hit +1</button>
      <button onClick={props.strike}>Strike +1</button>
      <button onClick={props.foul}>Foul +1</button>
    </>
  );
};

export default Dashboard;
