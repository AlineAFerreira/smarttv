import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleInfoVisibility } from '../../core/redux/actions/shared';
import { Events } from '../../util/Events';
import { KeyCodes } from '../../util/Utils';
import {Container, Content, BoxLeft, BoxRight, Title, Description, BoxButton, Button, BoxImg, BackButton } from './styles';

class MoreInfo extends Component {
  state = {
    isVisible: false,
    selectedItem: 0
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.moreInfoisVisible !== this.state.isVisible) 
      this.setState({isVisible : nextProps.moreInfoisVisible}, ()=> this.handleOnAndOffEvents(true))
  }

  handleOnAndOffEvents = (state) => {
    if (state) {
      document.addEventListener(Events.keydown, this.handlerKey, false);      
    } else {      
      document.removeEventListener(Events.keydown, this.handlerKey, false);
      this.setState({selectedItem: 0})
    } 
  }

  handlerKey = (e) => {
    if (e.keyCode === KeyCodes.KEY_RIGHT) {     
      this.moveFocusRight();
    }
    
    if (e.keyCode === KeyCodes.KEY_LEFT) {
      this.moveFocusLeft();
    }

    if (e.keyCode === KeyCodes.KEY_UP) {
      this.moveFocusUp();
    }

    if (e.keyCode === KeyCodes.KEY_DOWN) {
      this.moveFocusDown();
    }

    if (e.keyCode === KeyCodes.ENTER) {
      this.handleEnter();
    }
  }

  moveFocusRight = () => {
    const selectedItem = this.state.selectedItem;
    const totalItems = this.props.data.actionBtn.length;
    if (selectedItem < totalItems) this.setState({selectedItem : selectedItem + 1})
  }

  moveFocusLeft = () => {
    const selectedItem = this.state.selectedItem;
    if (selectedItem > 0) this.setState({selectedItem : selectedItem - 1})
  }

  moveFocusUp = () => {
    const selectedItem = this.state.selectedItem;
    const totalItems = this.props.data.actionBtn.length;
    if (selectedItem === totalItems) this.setState({selectedItem : 0})
  }

  moveFocusDown = () => {
    const selectedItem = this.state.selectedItem;
    const totalItems = this.props.data.actionBtn.length;
    if (selectedItem < totalItems) this.setState({selectedItem : totalItems})
  }

  handleEnter = () => {
    this.handleOnAndOffEvents(false);
    this.setState({isVisible:false}, ()=> this.props.toggleInfoVisibility(false));
  }

  render() {
    const selectedItem = this.state.selectedItem;
    const { title, description, actionBtn, backBtn, images} = this.props.data;
    const closeBtnIndex = actionBtn ? actionBtn.length : 0;

    return (
      <Container visible={this.state.isVisible}>
        <Content>
          <BoxLeft>
            <Title>{title}</Title>
            <Description>
              {description}
            </Description>
            <BoxButton>
              {actionBtn &&
                actionBtn.map((btn, i) => (
                  <Button key={i} className={`btn-watch ${selectedItem === i ? 'active' : ''}`}>
                    { btn.icon &&
                      <span className={`sky_icon sky-icon-filled-${btn.icon}`}></span>
                    }
                    {btn.label}
                  </Button>
                ))
              }
            </BoxButton>
          </BoxLeft>          
          <BoxRight>
            {images && 
              images.map((img, i) => <BoxImg key={i} source={img} />)
            }
          </BoxRight>
        </Content>
        {backBtn &&
          <BackButton 
            className={selectedItem === closeBtnIndex && 'active'}
            onClick={backBtn.callbackAction ? backBtn.callbackAction : this.handleEnter }>
            <i className={`sky_icon ${backBtn.icon}`}></i>
            <span>{backBtn.label}</span>
          </BackButton>                        
        }
      </Container>
    );
  }
}


const mapStateToProps = (state)=> {
  return {
    moreInfoisVisible: state.shared.moreInfoisVisible,
    data: state.shared.modalInfoData
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    toggleInfoVisibility: state => {
      dispatch(toggleInfoVisibility(state))
    }    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreInfo);