import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../core/redux/actions/user';
import styled from 'styled-components';
import GridCarousels from '../../components/GridCarousels';

import './styles.css';

class Home extends React.Component {
    render() {
        return (
            <Container>
                <div className="menu"></div>
                <GridCarousels />
            </Container>
        )
    }
}

const Container = styled.div`
    display:flex;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    width: 100vw;
    background-color: #161819;
    & .menu {
        width: 7vw;
        height: 100vh;
        background-color: #000;
    }
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