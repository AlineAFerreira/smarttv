import React, { Component } from 'react';
import {Container, Content, BoxLeft, BoxRight, Title, Description, Button, BoxImg, BackButton } from './styles';

export default class MoreInfo extends Component {
  state = {
    isVisible: this.props.visible,
    selectedItem: 0
  }

  render() {
    const selectedItem = this.state.selectedItem;
    //To do: Inserir dados dinâmicos Title, Description e souce do BoxImg
    // Constant tempData deverá ser excluída
    const tempData = 'https://picsum.photos/id/237/600/300';
    return (
      <Container visible={this.state.isVisible}>
        <Content>
          <BoxLeft>
            <Title>Lorem Ipsum </Title>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Description>
            <Button className={`btn-watch ${selectedItem === 0 && 'active'}`}>Assistir</Button>
          </BoxLeft>
          <BoxRight>
            <BoxImg source={tempData} />
            <BoxImg source={tempData} />
          </BoxRight>
        </Content>
        <BackButton onClick={()=> this.setState({isVisible:false})}>
          <i className="sky_icon sky-icon-line-corner-up-right"></i>
          <span>Informações</span>
        </BackButton>
      </Container>
    );
  }
}
