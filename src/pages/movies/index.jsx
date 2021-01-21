
import React, { Component } from 'react';
import Menu from './../../components/Menu';
import BoxLogo from './../../components/BoxLogo';
import Header from './../../components/Header';
import News from './../../components/News';
import GridCarousels from '../../components/GridCarousels';
import { Main, Container } from './styles';

export default class Movies extends Component {
  state = {
    menuIsOpen: false
  }

  animateContent = (bool) => {
    this.setState({menuIsOpen: bool})
  }

  render() {
    return (
      <Main>
        <Menu isOpen={this.animateContent}/>
        <BoxLogo />
        <Container pushed={this.state.menuIsOpen}>
          <Header page="Filmes" section="Novidades" />
          <News highlight={false} />
          <GridCarousels />
        </Container>
      </Main>
    );
  }
}
