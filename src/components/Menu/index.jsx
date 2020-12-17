import React, { Component } from 'react';
import { Container } from './styles';

export default class Menu extends Component {
  state = {
    menuIsOpen: false
  }

  toggleMenu = () => {
    this.setState({menuIsOpen : !this.state.menuIsOpen}, ()=> this.props.isOpen(this.state.menuIsOpen))
  }

  render() {
    return (
      <Container visible={this.state.menuIsOpen} 
        onClick={this.toggleMenu}>
        <div className="box-nav">
          <div id="nav-options" className="side-nav-body">
            <span id="changeProfile" className="nav-item side-nav-header">
              <img id="profile-nav-img" src="https://s3-sa-east-1.amazonaws.com/sky-digitaladmin/profile/icon28.png" />
              <span id="profile-nav-nickname" className="box-nickname">
                <span className="nickname">João da Silva Ferreira Junior</span>
                <span>Trocar Perfil</span>
              </span>
            </span>
            <span id="moviePage" className="nav-item">
              <span className="sky-icon-line-magnifier sky_icon"></span>
              <span className="nav-title">Buscar</span>
            </span>
            <span id="homePage" className="nav-item active">
              <span className="sky-icon-line-home sky_icon"></span>
              <span className="nav-title">Início</span>
            </span>
            <span id="" className="nav-item">
              <span className="sky-icon-line-live sky_icon"></span>
              <span className="nav-title">Ao Vivo</span>
            </span>
            <span id="moviePage" className="nav-item">
              <span className="sky-icon-line-filmroll sky_icon"></span>
              <span className="nav-title">Filmes</span>
            </span>
            <span id="seriePage" className="nav-item">
              <span className="sky-icon-line-episodes sky_icon"></span>
              <span className="nav-title">Séries</span>
            </span>
            <span id="channelPage" className="nav-item">
              <span className="sky-icon-line-tv sky_icon"></span>
              <span className="nav-title">Canais</span>
            </span>
            <span id="childrenPage" className="nav-item">
              <span className="sky-icon-line-infantil sky_icon"></span>
              <span className="nav-title">Infantil</span>
            </span>
            <span id="" className="nav-item config">
              <span className="sky-icon-line-settings sky_icon"></span>
              <span className="nav-title">Configurações</span>
            </span>

          </div>
          <span id="appVersion" className="version"></span>
        </div>
      </Container>
    );
  }
}
