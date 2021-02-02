import styled from 'styled-components';
import { COLORS } from '../../styles';
import BgLogin from '../../assets/images/background-login.jpg';

const LoginPage = styled.div`
    margin: 0;
    padding-left: 20vh;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    width: 100vw;
    background-image: url(${BgLogin});
    background-size: cover;
    color: ${COLORS.textSecondary};
    & .content {
        position: absolute;
        margin-top: 5vh;
        font-size: 2.5vh;
        height: 90vh;
        display: flex;
        justify-content:space-around;
        flex-direction:column;
    }
    & .logo {
        width: 15vh;
    }

    & .welcome-text {
        color: ${COLORS.textPrimary};
        width: 37.7vw;
        font-size: 4.2vh;
        font-weight: bold;
    }
    & .step {
        display:flex;
        align-items: flex-start;
        & .qrcode {
            margin-left:1vw;
            width: 13vh;
        }
        & .info-text {
            width: 45vw;
            margin-left: 1.5vw;
            line-height: 4.5vh;
        }
        & strong {
            display:block;
        }
        & .number {
            width: 6.5vh;
            border-radius:50%;
            border: 1px solid ${COLORS.textSecondary};
            color: ${COLORS.textPrimary};
            text-align: center;
            line-height: 6.5vh;
            font-weight: bold;
            height: 6.5vh;
            margin: 0 1vw 0 0;
        }
    }
`;

export { LoginPage };