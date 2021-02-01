import React, { Component } from 'react';
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
  }

  render() {
    return (
      <Container visible={this.props.menuIsOpen} onClick={this.handleMouseClick}>
        <div className="box-nav">
          {this.setMenuItems()}
        </div>
      </Container>
    );
  }
}

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
