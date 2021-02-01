import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
<<<<<<< HEAD
=======
  padding-left: 8vw;
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
  overflow-x: hidden;
`;

export const Container = styled.div`
<<<<<<< HEAD
  padding-left: 8vw;
=======
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  -o-transition: transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s;

  ${props => props.pushed && `
    transform: translateX(10vw);
  `}
`;
