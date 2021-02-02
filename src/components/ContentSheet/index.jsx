import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleInfoVisibility, fillInfoModal, activeBackButton } from '../../core/redux/actions/shared';
import { Events } from '../../util/Events';
import { KeyCodes, ActionButtons, cutText } from '../../util/Utils';
import { Container, Content, Title, Center, BoxLeft, Row, Button, Price, Rate, BoxRight, Cover, Devices } from './styles';
import ParentalRating from '../ParentalRating';
import ImdbLogo from '../../assets/images/imdb_logo.png';

class ContentSheet extends Component {
  state = {
    totalIndex: 4,
    selectedItem: 1
  }

  componentDidMount() {
    this.handleOnAndOffEvents(true, 1);
  }

  componentWillUnmount() {
    this.handleOnAndOffEvents(false, null);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.moreInfoisVisible === false) 
      this.handleOnAndOffEvents(true)
  }

  handleOnAndOffEvents = (state, i) => {    
    const index = i || 0;

    if (state) {
      document.addEventListener(Events.keydown, this.handlerKey, false);
      this.setState({selectedItem: index})
    } else {      
      document.removeEventListener(Events.keydown, this.handlerKey, false);
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
    const totalIndex = this.state.totalIndex - 1;

    if (this.state.selectedItem < totalIndex)
      this.setState({selectedItem: this.state.selectedItem + 1})  
  }

  moveFocusLeft = () => {
    this.state.selectedItem <= 1 ? this.activeBackButton() : this.setState({selectedItem: this.state.selectedItem - 1})
  }

  moveFocusUp = () => {
    this.state.selectedItem === 0 ? this.activeBackButton() :  this.setState({selectedItem: 0})
  }

  moveFocusDown = () => {
    if (this.state.selectedItem === 0) {
      this.setState({selectedItem: this.state.selectedItem + 1})  
    } else {
      this.setState({selectedItem: null});
      this.handleOnAndOffEvents(false);
      this.props.activeArrowNext(true);
    }
  }

  activeBackButton = () => {
    this.props.activeBackButton(true, this.handleOnAndOffEvents);
    this.handleOnAndOffEvents(false);
    this.setState({selectedItem: null})
  }

  handleEnter = () => {
    // To do: Adicionar demais funções de acordo com o item selecionado
    this.seeMore();
  }

  filterImageByType = (images, type) => {
    const image = images.find(img => {
      return img.type === type;
    });
    return image ? image.url : '';
  }

  setSynopsis = () =>{
    const synopsis = this.props.data.content.description;
    let synopsisMin = cutText(synopsis, 55);

    synopsisMin = synopsis.length > synopsisMin.length ? `${synopsisMin} ... Ler sinopse completa` :  synopsisMin;
    return synopsisMin;
  }

  seeMore = () => {
    const data = this.props.data.content;
    this.handleOnAndOffEvents(false);
    this.props.toggleInfoVisibility(true);
    // To do: Inserir dados dinamicos quando forem disponibilizados na API, 
    this.props.fillInfoModal({
      title: data.title,
      description: data.description,
      actionBtn: [
        { 
          icon: ActionButtons[data.eligibility.status].icon, 
          label: ActionButtons[data.eligibility.status].label,          
          callbackAction: 'Fn opcional aqui'
        }
      ],
      backBtn: { 
        icon: 'sky-icon-line-corner-up-right',
        label: 'Informações'
      },
      images: ['https://picsum.photos/id/237/600/300','https://d3bntrzcei186j.cloudfront.net/fit-in/1920x1080/images/sky-content-hub-prd/5baae15af3da7226a1e639a1/5a563880332c65000165b739_2_1920x1080.jpeg?timestamp=1584021588148'],
    })
  }

  fillWatchBtn = (eligibilityStatus) => {
    const data = this.props.data;
    const media = this.props.mediaType;
    return (
      <Button className={`btn-watch ${this.state.selectedItem === 1 ? 'active' : ''}`}>
        {(eligibilityStatus in ActionButtons) &&
          <>
            <span className={`sky_icon sky-icon-filled-${ActionButtons[eligibilityStatus].icon}`}></span> 
            {ActionButtons[eligibilityStatus].label} {(media === 1 && data.content.eligibility.status == 'eligible' && data.content.keepWatching) && data.content.keepWatching}
          </>
        }
      </Button>
    );
  }

  render() {
    const data = this.props.data;

    return (
      <Container style={{ backgroundImage: `url(${data.content.images && this.filterImageByType(data.content.images, "background")})` }}>
        <Content>
          <Title>{data.content.title}</Title>
          <Center>
            <BoxLeft>
              <Row>
                <ParentalRating rating={data.content.parentalAdvisory.rating}/>
                <span>{data.content.releaseYear}</span> 
                <span>{data.content.duration.text}</span> 
                <span>{(data.content.genres) ? data.content.genres.join(", ") : ''}</span>
                <span className="sky_icon sky-icon-line-hd"></span>
                <span className="sky_icon sky-icon-line-audio-description"></span>
                <span>Conteúdo {data.content.provider}</span>
              </Row>
              <Row className={this.state.selectedItem === 0 ? 'active' : ''} onClick={this.seeMore}>  
                {this.setSynopsis()} 
              </Row>
              <Row> 
                {this.fillWatchBtn(data.content.eligibility.status)}

                <Button className={this.state.selectedItem === 2 ? 'active' : ''}>
                  <span className="sky_icon sky-icon-line-my-list-add"></span>
                </Button>
                <Button className={this.state.selectedItem === 3 ? 'active' : ''}>
                  <span className="sky_icon sky-icon-line-thumb-up"></span>
                </Button>
                {data.content.eligibility.status === 'shopping-cart' &&
                  <Price>
                    <span className="sky_icon sky-icon-line-price-tag"></span> 
                    {data.content.price}
                  </Price>
                }
                <Rate> 
                  <span className="sky_icon sky-icon-line-star"></span> 8,7 
                  <img src={ImdbLogo} alt="website logo" />
                </Rate>
              </Row>
              <Row>
                <p><span>Áudio</span>Português, Inglês, Japonês</p>
                <p><span>Legenda</span>Português, Inglês, Japonês</p>
                <p><span>Classificação</span> 
                {data.content.parentalAdvisory.rating} <i className="bullet"></i> 
                {data.content.parentalAdvisory.description}</p>
              </Row>
            </BoxLeft>
            <BoxRight>
              <Cover className={data.content.eligibility.status}>
                <img src={data.content.images && this.filterImageByType(data.content.images, "cover")} alt={data.content.title} />
              </Cover>
              <Devices>Curta no: 
                <span className="sky_icon sky-icon-line-sky-equipment"></span>
                <span className="sky_icon sky-icon-line-cellphone"></span>
                <span className="sky_icon sky-icon-line-computer"></span>
                <span className="sky_icon sky-icon-line-tv"></span>
              </Devices>
            </BoxRight>
          </Center>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    moreInfoisVisible: state.shared.moreInfoisVisible
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    toggleInfoVisibility: state => {
      dispatch(toggleInfoVisibility(state))
    },  
    fillInfoModal: state => {
      dispatch(fillInfoModal(state));
    },  
    activeBackButton: (state, callbackfn) => {
      dispatch(activeBackButton(state, callbackfn))
    }  
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentSheet);
