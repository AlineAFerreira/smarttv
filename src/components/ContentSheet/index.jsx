import React, { Component } from 'react';
import ParentalRating from '../ParentalRating';
import { Events } from '../../util/Events';
import { KeyCodes, ActionButtons } from '../../util/Utils';
import { Container, Content, Title, Center, BoxLeft, Row, Button, Price, Rate, BoxRight, Cover, Devices } from './styles';
import ImdbLogo from '../../assets/images/imdb_logo.png';

export default class ContentSheet extends Component {
  state = {
    totalIndex: 4,
    selectedItem: 1
  }

  componentDidMount() {
    this.handleOnAndOffEvents(true);
  }

  componentWillUnmount() {
    this.handleOnAndOffEvents(false);
  }

  handleOnAndOffEvents = (state, index) => {
    if (state) {
      document.addEventListener(Events.keydown, this.handlerKey, false);
      if (index) this.setState({selectedItem: index})
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
  }

  moveFocusRight = () => {
    const totalIndex = this.state.totalIndex - 1;

    if (this.state.selectedItem < totalIndex)
      this.setState({selectedItem: this.state.selectedItem + 1})  
  }

  moveFocusLeft = () => {
    if (this.state.selectedItem <= 1) {
      // To do: Adicionar fn para alterar o foco para no botão 'Voltar', 
      // alterar state selectedItem null e remover alert. 
      // Será feito em outra feature de interação entre componentes
      alert('Botão sair')
    } else {
      this.setState({selectedItem: this.state.selectedItem - 1})
    }
  }

  moveFocusUp = () => {
    if (this.state.selectedItem === 0) {
      // To do: Adicionar fn para alterar o foco para no botão 'Voltar', 
      // alterar state selectedItem null e remover alert. 
      // Será feito em outra feature de interação entre componentes
      alert('Botão sair')
    } else {
      this.setState({selectedItem: 0})
    }
  }

  moveFocusDown = () => {
    if (this.state.selectedItem === 0) {
      this.setState({selectedItem: this.state.selectedItem + 1})  
    } else {
      this.setState({selectedItem: null});
      document.removeEventListener(Events.keydown, this.handlerKey, false);
      this.props.activeArrowNext(true);
    }
  }

  filterImageByType = (images, type) => {
    const image = images.find(img => {
      return img.type === type;
    });
    return image ? image.url : '';
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
      <Container style={{ backgroundImage: `url(${this.filterImageByType(data.content.images, "background")})` }}>
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
              <Row className={this.state.selectedItem === 0 ? 'active' : ''}>  
                {data.content.description} 
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
                <img src={this.filterImageByType(data.content.images, "cover")} alt={data.content.title} />
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
