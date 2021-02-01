import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  overflow-x: hidden;
`;

export const Container = styled.div`
  padding-left: 8vw;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  -o-transition: transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s;

  ${props => props.pushed && `
    transform: translateX(10vw);
  `}
`;
