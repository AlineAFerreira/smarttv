<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import Menu from './../../components/Menu';
import BoxLogo from './../../components/BoxLogo';
import Header from './../../components/Header';
import Highlight from './../../components/Highlight';
import News from './../../components/News';
import GridCarousels from '../../components/GridCarousels';
import { Main, Container } from './styles';

class Home extends React.Component {

  render() {
    return (
      <Main>                
        <Menu />
        <BoxLogo />
        <Container pushed={this.props.menuIsOpen}>
          <Header page="Início" section="Novidades" />
          {/* <Highlight /> */}
          <News highlight={true} />
          <GridCarousels />
        </Container>
      </Main>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    menuIsOpen: state.menu.menuIsOpen,
  }
}

export default connect(mapStateToProps)(Home);
=======
import React from 'react'
import { Main, Container } from './styles';
import Menu from './../../components/Menu';
import Highlight from './../../components/Highlight';
import News from './../../components/News';
import GridCarousels from '../../components/GridCarousels';

export default class Home extends React.Component {
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
                <Container pushed={this.state.menuIsOpen}>
                    {/* <Highlight /> */}
                    <News highlight={true} />
                    <GridCarousels />
                </Container>
            </Main>
        )
    }
}


>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed