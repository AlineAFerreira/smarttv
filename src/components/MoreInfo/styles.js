import styled from 'styled-components';
import { COLORS } from '../../styles';

export const Container = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items:center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
  backdrop-filter: blur(10px);
`;

export const Content = styled.div`
  display: flex;  
  background: ${COLORS.bgBox};
  color: #FFF;
  height: 80vh;
  padding: 5vw 10vw;
`;


export const BoxLeft = styled.div`
  padding-right: 15vw;
  display: flex;
  flex-direction: column;
`;

export const BoxRight = styled.div`
  flex: 0 0 20vw;
`;

export const BoxImg = styled.div`
  height: 50%;
  background: ${props => `url(${props.source}) no-repeat`};
  background-size: cover;

  :last-child {
    margin-top: 1vw;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1.8vw;
`;

export const Description = styled.div`
  color: ${COLORS.textSecondary};
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.8px;
`;

export const Button = styled.button`
margin-top: auto; 
  width: 4.2vw;
  height: 4.2vw;
  background: ${COLORS.bgBar};
  border: none;
  font-size: 2.8vh;
  border-radius: 50%;
  color: ${COLORS.textSecondary};
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: 0.4px;

  & + button {
    margin-left: 1vw;
  }

  span {
    font-size: 1.8vw;
  } 

  &.btn-watch {
    width: 20vw;
    border-radius: 10vh;

    span {
      font-size: 1.5vw;
      margin-right: 1vw;      
    }
  }

  :hover, :active, :focus, &.active {
    color: #FFF;
    background-image: linear-gradient(to bottom, ${COLORS.textLinkDefault}, ${COLORS.brand});
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.5);
  }
`;

export const BackButton = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 2vw;
  color: ${COLORS.bgLightest};
  background-color: #000000;
  border-radius: 6px;
  padding: .8vw 1.5vw;
  opacity: 0.7;

  i {
    transform: scaleX(-1);
  }

  span {
    font-size: 1.1vw;
    letter-spacing: 0.8px;
    margin-left: .8vw;
  }

  :hover, &.active {
    opacity: 1;
  }
`;

