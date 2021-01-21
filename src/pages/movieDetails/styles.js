import styled from 'styled-components';

export const Container = styled.div`
  padding: 4vw 4vw 4vw 10vw;
`;

export const Dots = styled.div`
  width: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 18vh;
  left: 4vw;
  z-index: 1;

  span {
    width: .6vw;
    height: .6vw;
    display: block;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.38);
    margin-top: .5vw;
    transition: all .4s;

    &.active {
      background-color: #FFF;
      transform: scale(1.3)
    }
  }
`;

export const NextSession = styled.div`
  position: fixed;
  left: 50%;
  bottom: 2vh;
  transform: translateX(-50%);

  ::before {
    content: "\\e241";
    font-family: 'SKY-Icon-Font';
    font-size: 3vw; 
    color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    padding: .3vw;
  }

  &.active, :hover {
    ::before {
      color: #fff;
      background: #272b2d;
    }
  }
`;
