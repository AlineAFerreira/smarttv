import React from 'react';
import { Numbers } from './styles';


export default class AuthNumbers extends React.Component {
    render() {
        return (
            <div>
                <span>Digite no app, o código abaixo e boa diversão :)</span>
                <Numbers>
                    <div>{this.props.numbers[0]}</div>
                    <div>{this.props.numbers[1]}</div>
                    <div>{this.props.numbers[2]}</div>
                    <div>{this.props.numbers[3]}</div>
                    <div>{this.props.numbers[4]}</div>
                    <div>{this.props.numbers[5]}</div>
                </Numbers>
            </div>
        )
    }
}