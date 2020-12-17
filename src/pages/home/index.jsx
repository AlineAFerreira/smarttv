import React from 'react'
import { Container } from './styles';
import Highlight from './../../components/Highlight';
import News from './../../components/News';

  export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Highlight />
                <News highlight={true} />
            </Container>
        )
    }
}
