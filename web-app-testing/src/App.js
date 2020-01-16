import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

export const add = plus => {
  return plus + 1;
};

const App = () => {
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);
  const [strike, setStrike] = useState(0);
  const [foul] = useState(0);

  if (ball === 4 || strike === 3) {
    setBall(0);
    setStrike(0);
  }

  if (hit === 1) {
    setBall(0);
    setStrike(0);
    setHit(0);
  }

  const fouls = () => {
    if (strike < 2) {
      setStrike(strike + 1);
    }
  };

  return (
    <div>
      <Display ball={ball} hit={hit} strike={strike} foul={foul} />
      <Dashboard
        ball={() => {
          setBall(add(ball));
        }}
        hit={() => {
          setHit(add(hit));
        }}
        strike={() => {
          setStrike(add(strike));
        }}
        foul={fouls}
      />
    </div>
  );
};

export default App;
