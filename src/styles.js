
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

<<<<<<< HEAD
  // HELPER CLASSES

  .bullet {
    display: inline-block;
    
    ::before {
      content: "\\2022";
    }
  }
`;

// VARIABLES

export const COLORS = {
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textLinkDefault: '#FF5454',
  brand: '#D81818',
  bgBar: '#272B2D',
  bgBox: '#242A2C',
  bgLightest: '#FFFFFF'
}
=======


`;
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
