import React from 'react';
import MoreInfo from '../../components/MoreInfo';
import CarouselEpisodesSeries from '../../components/CarouselEpisodesSeries';
import { tempData } from '../../util/tempDataContentSheet';
import tempDataCarouselEpsisodes from '../../util/tempDataCarouselEpsisodes';
import BackButton from '../../components/BackButton';
import ContentSheet from '../../components/ContentSheet';
import Catalog from '../../components/Catalog';
import { Container, Dots, NextSession } from './styles';

export default class SerieDetails extends React.Component {
    state = {
        activeArrow : false,
        moreInfoisVisible: true
    }

    activeArrow = (bool) => {
        if (bool) this.setState({activeArrow: bool})
    }
      
    render() {
        const isVisible = this.state.moreInfoisVisible;

        return (
            <Container>
                <MoreInfo visible={isVisible} />
                <BackButton />
                <Dots>
                <span className="active"></span><span></span><span></span>
                </Dots>
                {/* To do: Navegação entre as seções */}
                <ContentSheet data={tempData} mediaType={1} activeArrowNext={this.activeArrow}/>
                {/* <Catalog></Catalog> */}
                {/* <CarouselEpisodesSeries data={tempDataCarouselEpsisodes} /> */}
                <NextSession className={this.state.activeArrow ? 'active' : ''}/>
            </Container>
        )
    }
}