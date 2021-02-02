import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { activeBackButton } from '../../core/redux/actions/shared';
import { Events } from '../../util/Events';
import { KeyCodes } from '../../util/Utils';
import { BackBtn } from './styles';

class BackButton extends React.Component {
  state = {
    isActive : false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.IsSelected) 
      this.setState({isActive : nextProps.IsSelected}, ()=> this.handleOnAndOffEvents(true)) 
  }

  handleOnAndOffEvents = (state) => {
    state ? document.addEventListener(Events.keydown, this.handlerKey, false) : document.removeEventListener(Events.keydown, this.handlerKey, false);
  }

  handlerKey = (e) => {
    if (e.keyCode === KeyCodes.KEY_RIGHT) {   
      this.deactiveBackButton();
    }

    if (e.keyCode === KeyCodes.KEY_DOWN) {
      this.deactiveBackButton();
    }

    if (e.keyCode === KeyCodes.ENTER) {
      this.handleOnAndOffEvents(false);
      this.props.activeBackButton(false);
      this.props.history.goBack();
    }
  }

  deactiveBackButton = () => {   
    const backFocus = this.props.callbackFn;
    this.props.activeBackButton(false, null);
    this.handleOnAndOffEvents(false);
    this.setState({isActive: false});
    if (backFocus) backFocus(true);   
  }

  render() {
    return <BackBtn selected={this.state.isActive} />
  }
}

const mapStateToProps = state => {
  return {
    IsSelected: state.shared.backButton.IsSelected,
    callbackFn: state.shared.backButton.callbackAction
  }
}

 const mapDispatchToProps = dispatch => {
  return { 
    activeBackButton: (state, callbackfn) => {
      dispatch(activeBackButton(state, callbackfn))
    }  
  }
 }
    
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BackButton));
