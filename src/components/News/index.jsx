import React, { Component } from 'react';
import { Container } from './styles';

export default class News extends Component {
  render() {   
    return (
      <Container highlight={this.props.highlight}>
        <div className="item">
            <div className="card-rating rating-l">L</div>
            <div className="box-info">
                <h2>The Walking Dead</h2>
                <p>O estudante do ensino médio Hodaka sai de sua casa em uma linha isolada e se muda para Tóquio, mas ele imediatamente fica sem dinheiro.</p>
            </div>
        </div>
        <div className="item">
            <div className="card-rating rating-12">12</div>
            <div className="box-info">
                <h2>The Walking Dead</h2>
                <p>Nova Temporada disponível</p>
            </div>
        </div>
        <div className="item">
            <div className="card-rating rating-16">16</div>
            <div className="box-info">
                <h2>The Walking Dead</h2>
                <p>Nova Temporada disponível</p>
            </div>
        </div>
      </Container>
    );
  }
}
