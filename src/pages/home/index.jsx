import React from 'react'
import { Container } from './styles';
import News from './../../components/News';

  export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <News highlight={true} />
            </Container>
        )
    }
}
