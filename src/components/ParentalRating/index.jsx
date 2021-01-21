import React from 'react';
import'./styles.css';

function ParentalRating(props) {
  return <div className={`card-rating rating-${props.rating.toLowerCase()}`}>{props.rating.toUpperCase()}</div>;
}

export default ParentalRating;