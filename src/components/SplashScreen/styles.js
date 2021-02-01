import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Video = styled.video`
position: absolute;
  width: 100%;
  height: auto;
  transition: opacity .3s ease;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${props => props.finished && `
    opacity: 0;
  `}

`;