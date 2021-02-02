import React from 'react';
import Logo from '../../assets/logo-branco.png';
import QRCode from '../../assets/deeplink-qrcode.png';
import AuthNumbers from '../../components/AuthNumbers';
import { LoginPage } from './styles';

export default class Login extends React.Component {
    render() {
        return (
            <LoginPage>
                <div className="content">
                    <img src={Logo} alt="logo" className="logo" />
                    <p className="welcome-text">
                        Partiu assistir o SKY Play 🍿
                    </p>
                    <div className="step">
                        <span className="number">1</span>
                        <img src={QRCode} alt="QR Code" className="qrcode" />
                        <div className="info-text">
                            <strong>
                                Aponte a câmera do seu celular para o QR Code ao lado.
                        </strong>
                        Ou acesse a opção "<span className="sky_icon sky-icon-line-settings"></span> Configurações / SKY Play - site ou Smart TV" diretamente do app.
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