import React, { Component } from 'react';
import { Container } from './styles';

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <div class="box-nav">
          <div id="nav-options" class="side-nav-body">
            <span id="changeProfile" class="nav-item side-nav-header">
              <img id="profile-nav-img" src="https://s3-sa-east-1.amazonaws.com/sky-digitaladmin/profile/icon28.png" />
              <span id="profile-nav-nickname" class="nickname"></span>
            </span>
            <span id="moviePage" class="nav-item">
              <span class="sky-icon-line-magnifier sky_icon"></span>
              <span class="nav-title">Buscar</span>
            </span>
            <span id="homePage" class="nav-item active">
              <span class="sky-icon-line-home sky_icon"></span>
              <span class="nav-title">Início</span>
            </span>
            <span id="" class="nav-item">
              <span class="sky-icon-line-home sky_icon"></span>
              <span class="nav-title">Ao Vivo</span>
            </span>
            <span id="moviePage" class="nav-item">
              <span class="sky-icon-line-filmroll sky_icon"></span>
              <span class="nav-title">Filmes</span>
            </span>
            <span id="seriePage" class="nav-item">
              <span class="sky-icon-line-episodes sky_icon"></span>
              <span class="nav-title">Séries</span>
            </span>
            <span id="channelPage" class="nav-item">
              <span class="sky-icon-line-tv sky_icon"></span>
              <span class="nav-title">Canais</span>
            </span>
            <span id="childrenPage" class="nav-item">
              <span class="sky-icon-line-infantil sky_icon"></span>
              <span class="nav-title">Infantil</span>
            </span>
            <span id="" class="nav-item config">
              <span class="sky-icon-line-settings sky_icon"></span>
              <span class="nav-title">Configurações</span>
            </span>

          </div>
          <span id="appVersion" class="version"></span>
        </div>
      </Container>
    );
  }
}
