import styled from 'styled-components';
import { COLORS } from '../../styles';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000; 
  position: absolute;
  top: 0;
  left:0;
`;

export const Content = styled.div`
  background-image: linear-gradient(to bottom, rgba(22, 24, 25, 0.2), rgba(22, 24, 25, 0.8) 35%, rgba(22, 24, 25, 0.9) 65%, #161819, #161819);
  padding: 4vw 4vw 4vw 10vw;
`;

export const Title = styled.h1`
  color: #FFF;
  margin: 4vw 0 1vw;
`;

export const Center = styled.div`
  display: flex;
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled.div`
  .card-rating {
    width: 1.5vw;
    height: 1.5vw;
    font-size: .8vw;
  }

  :nth-child(1) {
    color: ${COLORS.textSecondary}; 
    display: flex;    
    align-items: center;

    span {
      font-size: 1.1vw;
      padding-left: 1.3vw;
      position: relative;

      :nth-child(3), :nth-child(4) {
        ::before, ::after {
          content: "\\2022";
          position: absolute;
          left: .4vw;
        }
      }

      :last-child {
        margin-left: auto;
      }

      &.sky_icon {
        font-size: 1.5vw;
      }
    }
  }

  :nth-child(2) {    
    color: #FFF;
    line-height: 1.50;
    letter-spacing: 0.7px;
    border-radius: 8px;
    padding: 1vw;
    margin-left: -1vw;

    :hover, &.active {
      box-shadow: 0 0 0 2px #000, 0 0 0 4px #fff;
    }
  }

  :nth-child(3) {
    display: flex;
    align-items: center;
  }

  :nth-child(4) {
    font-size: 1.1vw;
    color: ${COLORS.textSecondary};

    p {
      span {
        display: inline-block;
        width: 10vw;
        color: #fff;
        line-height: 2.15;
        letter-spacing: 0.4px;
      }
      :last-of-type span {
        margin-top: 1vw;
      }

      .bullet {
        padding: 0 1vw;
      }
    }
  }
`;

export const Button = styled.button`
  width: 4.2vw;
  height: 4.2vw;
  background: #272b2d;
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
  }
`;

export const Price = styled.div`
  color: #fff;
  font-size: 1.3vw;
  margin-left: auto;
  display: flex;
  align-items: center;

  span {
    font-size: 1.8vw;
    color: ${COLORS.textSecondary};
    margin-top: -3px;
    margin-right: .7vw;
  } 
`;

export const Rate = styled(Price)`
  img {
    height: 1.7vw;
    margin-left: .8vw;
  }
`;

export const BoxRight = styled.div`
  text-align: center;
  padding-left: 8vw;
  flex: 0 0 20vw;
`;

export const Cover = styled.div`
  position: relative;
  
  img {
    height: 62vh;
  }

  &.shopping-cart::before {
    content: '\\e983';
  }

  &.locker::before {
    content: '\\e97e';
  }

  ::before {    
    color: #FFF;
    font-family: 'SKY-Icon-Font';
    position: absolute;
    top: .5vw;
    right: .5vw;
    padding: .2vw;
    border-radius: 50%;
    border: 2px solid #FFF;
    background: rgba(0, 0, 0, .5);
  }
`;

export const Devices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1vw;
  color: ${COLORS.textSecondary};
  margin-top: 3vh;

  span {
    font-size: 1.5vw;
    padding-left: 1vw;
  }
`;
