import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { toggleMenu } from '../../core/redux/actions/menu';
import ParentalRating from '../ParentalRating';
import { dataTemp } from '../../util/tempDataNews';
import { Events } from '../../util/Events';
import { KeyCodes } from '../../util/Utils';
import { Container } from './styles';

class News extends Component {
  state = {
    selectedItem: null
  }

  setItems = () =>  {
    return dataTemp.map((item, index) => {
      return (
        <div key={item.id} className={`item ${this.state.selectedItem === index ? 'active' : ''}`} style={{ backgroundImage: `url(${item.cover})` }} onClick={this.openDetails}>    
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

  openDetails = () => {
    alert('Open Details')
  }

  openMenu = () => {
    this.props.toggleMenu(true, this.handleOnAndOffEvents);
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

  componentDidMount() {
    this.handleOnAndOffEvents(true);
  }

  componentWillUnmount() {
    this.handleOnAndOffEvents(false);
  }

  render() {   
    return (
      <Container highlight={this.props.highlight}>
        {this.setItems()}
=======
import { Container } from './styles';

export default class News extends Component {
  render() {   
    return (
      <Container highlight={this.props.highlight}>
        <div className="item">
            <div className="card-rating rating-l">L</div>
            <div className="box-info">
                <h2>The Walking Dead</h2>
                <p>O estudante do ensino médio Hodaka sai de sua casa em uma linha isolada e se muda para Tóquio, mas ele imediatamente fica sem dinheiro.</p>
            </div>
        </div>
        <div className="item">
            <div className="card-rating rating-12">12</div>
            <div className="box-info">
                <h2>The Walking Dead</h2>
                <p>Nova Temporada disponível</p>
            </div>
        </div>
        <div className="item">
            <div className="card-rating rating-16">16</div>
            <div className="box-info">
                <h2>The Walking Dead</h2>
                <p>Nova Temporada disponível</p>
            </div>
        </div>
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
      </Container>
    );
  }
}
<<<<<<< HEAD

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
=======
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
