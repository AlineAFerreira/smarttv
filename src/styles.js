
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



`;
