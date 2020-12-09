import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo-branco.png';
import QRCode from '../assets/deeplink-qrcode.png';
import AuthNumbers from '../components/AuthNumbers';

export default class Login extends React.Component {
    render() {
        return (
            <LoginPage>
                <div className="content">
                    <img src={Logo} alt="logo" className="logo" />
                    <p className="welcome-text">
                        Partiu assistir o SKY Play
                    </p>
                    <div className="step">
                        <span className="number">1</span>
                        <img src={QRCode} alt="QR Code" className="qrcode" />
                        <div className="info-text">
                            <strong>
                                Aponte a câmera do seu celular para o QR Code ao lado.
                        </strong>
                        Ou acesse a opção "Configurações / SKY Play - site ou Smart TV" diretamente do app.
                    </div>
                    </div>
                    <div className="step">
                        <span className="number">2</span>
                        <AuthNumbers numbers={[1, 2, 3, 4, 5, 6]} />
                    </div>
                    <p>
                        Se ainda não é cliente, acesse o site <strong>assine.sky.com.br</strong> e conheça as ofertas.
                    </p>
                </div>
            </LoginPage>
        )
    }
}

const LoginPage = styled.div`
    margin: 0;
    padding-left: 9.3vw;
    background-image: #161819;
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