import styled from 'styled-components';

export const Container = styled.div`
  /* TEMPORÁRIO */
  background-image: url('https://d37wmy56xprd2c.cloudfront.net/fit-in/1920x1080/NWJhYTE4YmUyYWRlNDM4YmM1M2UyNWM2_11032_BACKGROUND_1920x1080.jpeg?timestamp=1603863359957');
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: right;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 8vw;
    bottom: 0;
    background: rgb(22,24,25);
    background: linear-gradient(0deg, rgba(22,24,25,1) 3%, rgba(18,19,20,0.6138830532212884) 60%, rgba(0,0,0,0) 100%);
  }
`;

export const BoxHighlight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(22,24,25);
  background: linear-gradient(90deg, rgba(22,24,25,1) 25%, rgba(22,24,25,1) 40%, rgba(0,0,0,0) 100%);
  color: #FFF;
  height: 30vw;
`;

export const Title = styled.h1`
  /* font-size: 34px; */
  font-size: 2.4vw; 
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
`;

export const Features = styled.div`  
  color: rgba(255, 255, 255, 0.7);
  margin: 16px 0 26px;
  font-size: 17px;

  .card-rating {
    font-size: 80%;
    width: 1.8vw;
    height: 1.8vw;
  }

  > span {
    &::before {
      content: attr(char);
      padding: 0 .5vw;
    }
  }
`;

export const Description = styled.div`
  width: 37%;
  color: #fff;
  margin: 16px 0 26px;
  font-size: 17px;
  line-height: 25px;
`;

export const Details = styled.div`
  position: absolute;
  left: 40%;
  top: 50%;
  font-size: 1.5vw;
  font-weight: bold;
  text-align: center;
  color: #FFF;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 3.5vw;
    height: 3.5vw;
    background: rgba(255, 255,255, 0.3);
    margin: 0 auto 0.9vw;
    font-size: 1.8vw;
  }
`;



