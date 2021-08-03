import React from 'react';
import Card from './Card';

import '../styles/App.css';

function App() {
  const body1 =
    'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip';
  const body2 =
    'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.';
  const body3 =
    'Cuise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style';
  return (
    <div className="main">
      <div className="container">
        <Card src="images/icon-sedans.svg" title="SEDANS" body={body1} />
        <Card src="images/icon-suvs.svg" title="SUVS" body={body2} />
        <Card src="images/icon-luxury.svg" title="LUXURY" body={body3} />
      </div>
    </div>
  );
}

export default App;
