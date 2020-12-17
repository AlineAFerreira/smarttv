
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {    
    font-family: 'Roboto', sans-serif;
    background-color: #161819;
  }

  button, select, input {
    &:focus {
      outline: none;
    }
  }

/* PARENTAL RATING   */
.card-rating {
    font-weight: bold;
    border: 1px solid #fff;
    border-radius: 0.2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.rating-l {
  background-color: #00a651;
}

.rating-10 {
  background-color: #0095da;
}

.rating-12 {
  background-color: #fbc115;
}

.rating-14 {
  background-color: #f58220;
}

.rating-16 {
  background-color: #ec1d25;
}

.rating-18 {
  background-color: #000000;
}

`;
