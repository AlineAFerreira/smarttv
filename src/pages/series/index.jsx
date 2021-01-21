import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './../../components/Menu';
import BoxLogo from './../../components/BoxLogo';
import Header from './../../components/Header';
import News from './../../components/News';
import GridCarousels from '../../components/GridCarousels';
import { Main, Container, BoxNews } from './styles';

class Series extends Component {
  render() {
    return (
      <Main>
        <Menu />
        <BoxLogo />
        <Container pushed={this.props.menuIsOpen}>
          <Header page="Séries" section="Novidades" />
          <BoxNews>
            <News highlight={false} />
          </BoxNews>
          <GridCarousels />
        </Container>
      </Main>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    menuIsOpen: state.menu.menuIsOpen,
  }
}

export default connect(mapStateToProps)(Series);