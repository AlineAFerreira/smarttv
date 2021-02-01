import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { toggleMenu } from '../../core/redux/actions/menu';
import { Events } from '../../util/Events';
import { KeyCodes, MenuItems } from '../../util/Utils';
import classNames from "classnames";
import { Container } from './styles';

class Menu extends Component {
  state = {
    activeItem: 2,
    selectedItem: 2,
    totalItems: MenuItems.length
  }

  componentDidUpdate() {
    this.handleOnAndOffEvents(this.props.menuIsOpen)
  }

  handleOnAndOffEvents = (state) => {
    state ? document.addEventListener(Events.keydown, this.handlerKey, false) : document.removeEventListener(Events.keydown, this.handlerKey, false);
  }

  toggleMenu = () => {
    if (this.props.lastComponent) {
      this.props.lastComponent(true);
    };
    this.props.toggleMenu(!this.props.menuIsOpen);
  }

  handlerKey = (e) => {
    if (e.keyCode === KeyCodes.KEY_RIGHT) {     
      this.moveFocusRight();
    }

    if (e.keyCode === KeyCodes.KEY_UP) {
      this.moveFocusUp();
    }

    if (e.keyCode === KeyCodes.KEY_DOWN) {
      this.moveFocusDown();
    }

    if (e.keyCode === KeyCodes.ENTER) {
      this.activeItem();
    }
  }

  moveFocusRight = () => {
    this.toggleMenu();
  }

  moveFocusUp = () => {
    const selectedItem = this.state.selectedItem;
    const totalItems = this.state.totalItems - 1;

    selectedItem === 0 ?  
    this.setState({selectedItem : totalItems}) : 
    this.setState({selectedItem : selectedItem - 1})
  }

  moveFocusDown = () => {
    const selectedItem = this.state.selectedItem;
    const totalItems = this.state.totalItems - 1;

    selectedItem === totalItems ?  
    this.setState({selectedItem : 0}) : 
    this.setState({selectedItem : selectedItem + 1})
  }

  activeItem = () => {
    this.setState({activeItem : this.state.selectedItem});  
    this.toggleMenu();
    const path = MenuItems[this.state.activeItem].path;
  }

  handleMouseClick = (e) => {
    const elem = e.target;

    if (!this.props.menuIsOpen || elem.classList.contains('box-nav')) { 
      this.toggleMenu();
    } else {
      const clickedItemIndex = +elem.parentNode.getAttribute('data-index');
      this.setState({selectedItem : clickedItemIndex}, ()=> this.activeItem()); 
    }

  }

  setMenuItems = () => {
    const active = this.state.activeItem;
    const hover = this.state.selectedItem;

    return MenuItems.map((item, i) => {
      if (i === 0) {
        return (
          <span 
            key={i} 
            data-index={i}
            className={classNames({
            'nav-item': true,
            hover: hover === i,
            active: active === i 
            })}
          >
            {/* To do: Adicionar Nome e avatar do usuário dinamicamente  */}
            <img id="profile-nav-img" src="https://s3-sa-east-1.amazonaws.com/sky-digitaladmin/profile/icon28.png" />
            <span id="profile-nav-nickname" className="box-nickname">
              <span className="nickname">João da Silva Ferreira Junior</span>
              <span>{item.label}</span>
            </span>
          </span>
        )
      } else {
        return (
          <span 
            key={i}  
            data-index={i}         
            className={classNames({
            'nav-item': true,
            hover: hover === i,
            active: active === i 
            })}
          >
            <span className={`${item.icon} sky_icon`}></span>
            <span className="nav-title">{item.label}</span>
          </span>
        )
      }
    })
=======
import { Container } from './styles';

export default class Menu extends Component {
  state = {
    menuIsOpen: false
  }

  toggleMenu = () => {
    this.setState({menuIsOpen : !this.state.menuIsOpen}, ()=> this.props.isOpen(this.state.menuIsOpen))
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
  }

  render() {
    return (
<<<<<<< HEAD
      <Container visible={this.props.menuIsOpen} onClick={this.handleMouseClick}>
        <div className="box-nav">
          {this.setMenuItems()}
=======
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
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
        </div>
      </Container>
    );
  }
}
<<<<<<< HEAD

const mapStateToProps = (state)=> {
  return {
    menuIsOpen: state.menu.menuIsOpen,
    lastComponent: state.menu.lastComponent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: page => {
      dispatch(toggleMenu(page))
    }    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
=======
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
