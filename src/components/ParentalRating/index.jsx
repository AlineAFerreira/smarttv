import React from 'react';
import'./styles.css';

function ParentalRating(props) {
<<<<<<< HEAD
  return <div className={`card-rating rating-${props.rating.toLowerCase()}`}>{props.rating.toUpperCase()}</div>;
=======
  return <div className={`card-rating rating-${props.rating}`}>{props.rating.toUpperCase()}</div>;
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
}

export default ParentalRating;