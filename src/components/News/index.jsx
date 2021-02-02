import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleMenu } from '../../core/redux/actions/menu';
import ParentalRating from '../ParentalRating';
import { dataTemp } from '../../util/tempDataNews';
import { Events } from '../../util/Events';
import { KeyCodes, TypeToRoutes } from '../../util/Utils';
import { Container } from './styles';

class News extends Component {

  constructor(props) {
    super(props);
    this.news = React.createRef();
  }
  state = {
    selectedItem: null
  }

  componentDidMount() {
    this.handleOnAndOffEvents(true);
  }

  componentWillUnmount() {
    this.handleOnAndOffEvents(false);
  }

  handleOnAndOffEvents = (state) => {
    if (state) {
      document.addEventListener(Events.keydown, this.handlerKey, false);
      this.setState({selectedItem: 0})
    } else {      
      document.removeEventListener(Events.keydown, this.handlerKey, false);
      this.setState({selectedItem: null})
    } 
  }
  
  handlerKey = (e) => {
    if (e.keyCode === KeyCodes.KEY_RIGHT) {     
      if (this.props.highlight) {
        if (this.state.selectedItem === 0)
          this.setState({selectedItem: this.state.selectedItem + 1})
      } else {
        if (this.state.selectedItem < 2)
          this.setState({selectedItem: this.state.selectedItem + 1})
      }
    }
    
    if (e.keyCode === KeyCodes.KEY_LEFT) {
      if (this.props.highlight) {
        if (this.state.selectedItem > 0) {
          this.setState({selectedItem: 0})
        } else {
          this.openMenu();          
        }
      } else {
        if (this.state.selectedItem === 0) {
          this.openMenu(); 
        } else if (this.state.selectedItem > 0) {
          this.setState({selectedItem: this.state.selectedItem - 1})
        }
      }
    }

    if (e.keyCode === KeyCodes.KEY_UP) {
      if (this.props.highlight) {
        if (this.state.selectedItem === 2)
          this.setState({selectedItem: this.state.selectedItem - 1})
      }
    }

    if (e.keyCode === KeyCodes.KEY_DOWN) {
      if (this.props.highlight) {
        if (this.state.selectedItem === 1) {
          this.setState({selectedItem: this.state.selectedItem + 1})
        } else {
          this.setState({selectedItem: null})
        } 
      } else {
        this.setState({selectedItem: null})
      }
    }

    if (e.keyCode === KeyCodes.ENTER) {
      this.openDetails();
    }
  }

  setItems = () =>  {
    return dataTemp.map((item, index) => {
      return (
        <div 
          key={index} 
          id={item.id}
          mediatype={item.mediaType}
          className={`item ${this.state.selectedItem === index ? 'active' : ''}`} 
          style={{ backgroundImage: `url(${item.cover})` }} 
          onClick={this.openDetails} 
        >    
          <ParentalRating rating={item.parentRating} />        
          <div className="box-info">
              <h2>{item.title}</h2>                
              <p>
                {this.props.highlight ? 
                  item.description :
                  <>
                    {item.year}
                    <i className="bullet" type={item.genre}></i>
                    {item.genre}
                  </>
                } 
              </p>
              <div className="details">
                <span className="sky_icon sky-icon-line-info"></span>
              </div>
          </div>
        </div>
      )
    })
  }

  openDetails = (e) => {
    // Se for click com Magic Control pega o evento, se for controle convencional pega o elemento ativo
    const elem = e ? e.currentTarget : this.news.current.getElementsByClassName('active')[0];
    const id = elem.id;
    const itemType = elem.getAttribute('mediatype').toLowerCase();
    const url = `${TypeToRoutes[itemType]}/details/${id}`;
    this.props.history.push(url)
  }

  openMenu = () => {
    this.props.toggleMenu(true, this.handleOnAndOffEvents);
    this.handleOnAndOffEvents(false);
  }

  render() {   
    return (
      <Container ref={this.news} highlight={this.props.highlight}>
        {this.setItems()}
      </Container>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    menuIsOpen: state.menu.menuIsOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: (state, callbackfn) => {
      dispatch(toggleMenu(state, callbackfn))
    }    
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(News));
