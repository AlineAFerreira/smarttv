import React from 'react';
import Logo from '../../assets/logo-branco.png';
import QRCode from '../../assets/deeplink-qrcode.png';
import AuthNumbers from '../../components/AuthNumbers';
import { LoginPage } from './styles';
import { Events } from '../../util/Events';
import { KeyCodes } from '../../util/Utils';

export default class Login extends React.Component {
    componentDidMount() {
        document.addEventListener(Events.keydown, this.handlerKey, false);    
      }
    
      componentWillUnmount() {
        document.removeEventListener(Events.keydown, this.handlerKey, false);
      }

      handlerKey = (e) => {    
        if (e.keyCode === KeyCodes.KEY_RIGHT) {
            window.location.href = window.location.href + 'home'
        }
      }

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