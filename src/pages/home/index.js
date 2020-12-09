import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../core/redux/actions/user';
import Carousel from '../../components/Carousel';
import styled from 'styled-components';

import './styles.css';

class Home extends React.Component {
    render() {
        return (
            <Container>
                <div className="menu"></div>
                <CarouselContainer>
                    <Carousel />
                    <Carousel />
                    <Carousel />
                </CarouselContainer>
            </Container>
        )
    }
}

const Container = styled.div`
    display:flex;
    & .menu {
        width: 7vw;
        height: 100vh;
        background-color: #000;
        //161819
    }
`;

const CarouselContainer = styled.div`

`;


const mapStateToProps = ({ users }) => {
    return {
        users: users.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUserClicked: user => {
            dispatch(addUser(user))
        }
    }
}

const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeConnected