import React from 'react';
import'./styles.css';

function ParentalRating(props) {
  return <div className={`card-rating rating-${props.rating}`}>{props.rating.toUpperCase()}</div>;
}

export default ParentalRating;