import React, { Component } from 'react';
import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
      <Container> 
        <span>{this.props.page}</span>
        <h1>{this.props.section}</h1>
      </Container>
    );
  }
}
