import styled from 'styled-components';
import LogoSky from '../../assets/images/sky_logo-white.png';

export const Container = styled.div`
  position: absolute;
  width: 6vw;
  height: 16vh;
  right: 3vw;
  background:  url(${LogoSky}) no-repeat center; 
  background-size: contain;
`;