import React, { Component } from 'react';
import ParentalRating from './../ParentalRating';
import { BoxHighlight, Container, Title, Features, Description, Details } from './styles';

export default class Highlight extends Component {
  render() {
    return (
      <Container> 
        <BoxHighlight> 
          <Title>Pokémon: Detetive Pikachu</Title>
          <Features>
            <ParentalRating rating="l"/>
            <span>2019</span>
            <span char="&#x2022;">105 min</span>
            <span char="&#x2022;">Ação e Aventura</span>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
            </Description>
            <Details>
              <span className="sky_icon sky-icon-line-info"></span> Detalhes
            </Details>
          </Features>
        </BoxHighlight>
      </Container>
    );
  }
}
