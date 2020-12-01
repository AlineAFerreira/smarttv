import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../core/redux/actions/user';
import './styles.css';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <img src="https://skyplay.sky.com.br/o/sky-play-theme/images/logo-sky.svg" alt="sky logo" />
            </div>
        )
    }
}

const mapStateToProps = ({users}) => {
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