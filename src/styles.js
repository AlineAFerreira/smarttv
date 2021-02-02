
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
  textDisable: 'rgba(255, 255, 255, 0.5)',
  brand: '#D81818',
  bgBar: '#272B2D',
  bgLightest: '#FFFFFF',
  textPrimary: '#ffffff',
  bgBox: '#202425',
  overlayDarkest: '#000000',
  overlayDarkest80: 'rgba(0, 0, 0, 0.8)',
  overlayDarkest60: 'rgba(0, 0, 0, 0.6)',
  overlayDarkest10: 'rgba(0, 0, 0, 0.1)',
  overlayDarkest0: 'rgba(0, 0, 0, 0)',
  overlayLightest: '#FFFFFF',
  overlayLightest80: 'rgba(255, 255, 255, 0.8)',
  overlayLightest60: 'rgba(255, 255, 255, 0.6)',
  overlayLightest10: 'rgba(255, 255, 255, 0.1)',
  overlayLightest0: 'rgba(255, 255, 255, 0)',
  bgActive: '#363D3E'
}
