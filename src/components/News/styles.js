import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
<<<<<<< HEAD
  grid-template-rows: auto;
  grid-auto-flow: row;
  grid-gap: 15px;
  height: 20vw;

  ${props => props.highlight && `
    grid-template-columns: 64% 34%;
    grid-template-rows: auto auto;
    height: 30vw;
=======
  grid-template-rows: auto auto;
  grid-auto-flow: row;
  grid-gap: 15px;
  height: 30vw;

  ${props => props.highlight && `
    grid-template-columns: 64% 34%;
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
  `}

  > div {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    border: 2px solid #292a2a;

<<<<<<< HEAD
    :hover, :active, :focus, &.active {
      border: 2px solid #FFF;
      outline: none;

      .box-info {
        .details {
          opacity: 1;
        }
      }
    }
  }

  .box-info {    
    background: rgb(25,25,25);
    background: linear-gradient(0deg,rgba(25,25,25,1) 75%, rgba(38,37,37,0.76234243697479) 90%,rgba(0,0,0,0) 100%);
    color: #fff;
    padding: 1.5vw 4.3vw 1.5vw 1.5vw;
    font-size: 90%;

    h2 {
      font-size: 1.3vw;
      margin-bottom: 0.5vw;
    }

    p {
      i {
        margin: 0 .5vw;
      }
    }

    .details {
      position: absolute;
      right:  1.2vw;
      bottom:  1.2vw;      
      background: rgba(255, 255, 255, .25);
      border-radius: 50%;      
      opacity: 0;
      transition: opacity .4s ease;

      &::after {
        content: 'Detalhes';
        font-size: 1vw;
        font-weight: 600;
        color: #FFF;
        line-height: 1.43;
        letter-spacing: 0.6px;
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
        display: none;
      }

      > span {
        font-size: 1.3vw;
        padding: 1vw; 
      }
=======
    :hover, :active {
      border: 2px solid #FFF;
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
    }
  }

  ${props => props.highlight && `
<<<<<<< HEAD
    .box-info {
      background: linear-gradient(0deg, rgba(25,25,25,1) 25%, rgba(38,37,37,0.76234243697479) 62%, rgba(0,0,0,0) 100%);
    }

=======
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
    > div:first-child {
      grid-column: 1;
      grid-row: 1 / 3;

      .card-rating {
        font-size: 105%;
        width: 2vw;
        height: 2vw;
      }

      .box-info {
        font-size: 105%;
<<<<<<< HEAD
        padding: 3vw 7vw 3vw 3vw;
=======
        padding-right: 7vw;
        padding: 3vw;
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed

        h2 {
          margin-bottom: 0.5vw;
        }

        p {
          line-height: 1.8vw;;
        }
<<<<<<< HEAD

        .details {
          right: 3.5vw;
          bottom: 4vw;     

          &::after {
            display: block;
          }
        }
=======
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
      }
    }
  `}

  .card-rating {
    position: absolute;
    top: 8%;
    left: 5%;
    display: flex;
    width: 1.8vw;
    height: 1.8vw;
    font-size: 0.9vw;
  }
<<<<<<< HEAD
=======

  .box-info {    
    background: rgb(25,25,25);
    background: linear-gradient(0deg, rgba(25,25,25,1) 25%, rgba(38,37,37,0.76234243697479) 62%, rgba(0,0,0,0) 100%);
    color: #fff;
    padding: 1.5vw;
    font-size: 90%;
  }

  /* TEMPORARIO */
  > div:nth-child(1) {
  background-image: url('https://www.jbox.com.br/wp/wp-content/uploads/2019/11/weatheringwithyou-destacada.jpg')
  }
  > div:nth-child(2) {
    background-image: url('https://resenhandosonhos.com/wp-content/uploads/2017/10/blade-runner-01.jpg')
  }
  > div:nth-child(3) {
    background-image: url('https://3.bp.blogspot.com/-3KkpnupAj_8/W0PmXVArmMI/AAAAAAAAgxw/NydcRYNP8hII-HG638R3wTKMV5FLP1l4ACLcBGAs/s1600/MV5BMTk0MjM1NDM2MV5BMl5BanBnXkFtZTgwODQyNTU4NTM%2540._V1_.jpg')
  }
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
`;
