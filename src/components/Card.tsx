import React from 'react';
import "./card.css"

type Properties = {
  topText: string;
  middleText: string;
  bottomText: string;
}

export const Card = ({topText, middleText, bottomText}: Properties) => {
  return (
    <div className="card">
      <p className="card-top-and-bottom">{topText.toUpperCase()}</p>
      <p className="card-display-text">{middleText}</p>
      <p className="card-top-and-bottom">{bottomText}</p>
    </div>
  );
};