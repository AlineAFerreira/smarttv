import React, { Component } from 'react';
import BackButton from '../../components/BackButton';
import MoreInfo from '../../components/MoreInfo';
// To do: DADOS TEMPORÁRIOS, REMOVER QUANDO OS DADOS DINÂMICOS FOREM INSERIDOS
import { tempData } from '../../util/tempDataContentSheet';
import ContentSheet from '../../components/ContentSheet';
import Catalog from '../../components/Catalog';
import { Container, Dots, NextSession } from './styles';

export default class MovieDetails extends Component {

  state = {
    activeArrow : false
  }

  activeArrow = (bool) => {
    if (bool) this.setState({activeArrow: bool})
  }

  render() {
    return (
      <Container>
        <MoreInfo />
        <BackButton />
        <Dots>
          <span className="active"></span><span></span><span></span>
        </Dots>
        {/* To do: Manter componente comentado abaixo, 
        será usado quando for inserida a navegação entre as seções */}
        <ContentSheet data={tempData} mediaType={1} activeArrowNext={this.activeArrow}/>
        {/* <Catalog></Catalog> */}
        <NextSession className={this.state.activeArrow ? 'active' : ''}/>
      </Container>
    );
  }
}
