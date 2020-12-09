import React from 'react';
import styled from 'styled-components';

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

const Numbers = styled.div`
    color: #FFF;
    display: flex;
    font-size: 8.5vh;
    margin-top: 2vh;
    font-weight: bold;
    & div {
        border: .1vh solid #EEE;
        border-radius: 1.1vh;
        margin-left: .7vw;
        width: 6.25vw;
        height: 13vh;
        line-height: 12vh;
        text-align:center
    }
    & div:first-child {
        margin-left: 0
    }
`;