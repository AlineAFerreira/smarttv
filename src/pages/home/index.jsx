import React from 'react'
import { Container } from './styles';
import Menu from './../../components/Menu';
import News from './../../components/News';

  export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Menu />
                <News highlight={true} />
            </Container>
        )
    }
}
