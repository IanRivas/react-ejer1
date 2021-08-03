import React from 'react';

import '../styles/Card.css';

function Card({ src, title, body }) {
  return (
    <div className="card">
      <img src={src} alt="logo" />
      <h2>{title}</h2>
      <p>{body}</p>
      <button>Learn More</button>
    </div>
  );
}

export default Card;
