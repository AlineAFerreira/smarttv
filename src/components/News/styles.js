import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-auto-flow: row;
  grid-gap: 15px;
  height: 30vw;

  ${props => props.highlight && `
    grid-template-columns: 64% 34%;
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

    :hover, :active {
      border: 2px solid #FFF;
    }
  }

  ${props => props.highlight && `
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
        padding-right: 7vw;
        padding: 3vw;

        h2 {
          margin-bottom: 0.5vw;
        }

        p {
          line-height: 1.8vw;;
        }
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
`;
