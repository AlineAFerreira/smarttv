import React from 'react'
import { connect } from 'react-redux'
import { addUser, getUsers } from '../../core/redux/actions/user';
import './styles.css';

class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        return (
            <div className="container-users">
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
        },
        getUsers: () => {
            dispatch(getUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)