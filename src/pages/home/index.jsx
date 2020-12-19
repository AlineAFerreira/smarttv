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


