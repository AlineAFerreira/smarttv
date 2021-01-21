import styled from 'styled-components';

const LoginPage = styled.div`
    margin: 0;
    padding-left: 9.3vw;
    background-color: #161819;
    font-family: 'Roboto', sans-serif;
    height:100vh;
    width:90.7vw;
    color: #CCC;
    & .content {
        position:absolute;
        margin-top:5vh;
        font-size:2.9vh;
        height: 90vh;
        display: flex;
        justify-content:space-around;
        flex-direction:column;
    }
    & .logo {
        width:11.5vw;
    }

    & .welcome-text {
        color: white;
        width: 37.7vw;
        font-size: 4.2vh;
        font-weight: bold;
    }
    & .step {
        display:flex;
        align-items: flex-start;
        & .qrcode {
            margin-left:1vw;
            width: 15vh;
        }
        & .info-text {
            width: 45vw;
            margin-left:1.5vw;
            line-height:4.8vh;
        }
        & strong {
            display:block;
        }
        & .number {
            width:3.5vw;
            border-radius:50%;
            border: 1px solid #fff;
            color: #fff;
            text-align: center;
            line-height: 3.3vw;
            font-weight: bold;
            height: 3.5vw;
            margin: 0 1vw 0 0;
        }
    }
`;

export { LoginPage };