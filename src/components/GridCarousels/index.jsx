import React from 'react';
import { Events } from '../../util/Events';
import { tempData } from '../../util/tempDataCarousels';
import { getPercent, KeyCodes } from '../../util/Utils';
import Carousel from '../Carousel';
import { carouselHeightHeightRelated, carouselMarginTopHeightRelated } from '../Carousel/styles';
import { Cursor, GridContainer } from './styles';
export default class GridCarousels extends React.Component {
    state = {
        carousels: [],
        currentCarosel: 0,
        position: {
            translateY: 0
        }
    }
    constructor(props) {
        super(props);
        this.handlerKey = this.handlerKey.bind(this);
    }


    handlerKey(evt) {
        if (evt.keyCode === KeyCodes.KEY_RIGHT) {
            this.changeCard(true);
        }
        if (evt.keyCode === KeyCodes.KEY_LEFT) {
            this.changeCard(false);
        }
        if (evt.keyCode === KeyCodes.KEY_DOWN) {
            this.changeCarousel(true);
        }
        if (evt.keyCode === KeyCodes.KEY_UP) {
            this.changeCarousel(false);
        }
    }

    changeCarousel(directon) {
        let nextCarousel = this.state.currentCarosel;
        if (directon) {
            if (this.state.currentCarosel < this.state.carousels.length - 1) {
                nextCarousel = this.state.currentCarosel + 1;
            }
        } else {
            if (this.state.currentCarosel > 0) {
                nextCarousel = this.state.currentCarosel - 1;
            }
        }
        const carouselHeight = getPercent(window.innerHeight, (carouselHeightHeightRelated + carouselMarginTopHeightRelated));
        const finalPosition = carouselHeight * nextCarousel;
        this.setState({
            ...this.state,
            currentCarosel: nextCarousel,
            position: {
                translateY: finalPosition
            }
        })
    }

    changeCard(direction) {
        let carousels = this.state.carousels;
        let currentCarousel = carousels[this.state.currentCarosel];
        const currentCard = currentCarousel.currentCard;
        const totalCards = currentCarousel.data.cards.length - 1;
        let newCurrentCard;
        if (direction) {
            newCurrentCard = currentCard === totalCards + 1 ? 1 : currentCard + 1;
        } else {
            newCurrentCard = currentCard === 0 ? 0 : currentCard - 1;
            newCurrentCard = newCurrentCard === totalCards ? 0 : newCurrentCard;
        }
        carousels[this.state.currentCarosel].currentCard = newCurrentCard;
        this.setState({
            ...this.state,
            carousels
        });
    }


    fillCarousels() {
        let carousels = [];
        for (let i in tempData) {
            if (!tempData[i].isLive) {
                tempData[i].cards.push({
                    type: 'button',
                    icon: 'sky-icon-line-my-list',
                    title: 'Lista completa',
                    subTitle: `${tempData[i].cards.length}`
                });
            }
            carousels.push({
                currentCard: 0,
                data: tempData[i]
            });
        }
        this.setState({
            ...this.state,
            carousels
        });
    }

    componentDidMount() {
        this.fillCarousels();
        document.addEventListener(Events.keydown, this.handlerKey, false);
    }
    componentWillUnmount() {
        document.removeEventListener(Events.keydown, this.handlerKey, false);
    }
    renderCarousels() {
        let carousels = [];
        this.state.carousels.forEach((carousel, i) => {
            carousels.push(<Carousel data={carousel.data} isLive={carousel.data.isLive || false} key={i} currentCard={this.state.carousels[i].currentCard} />)
        });
        return carousels;
    }

    render() {
        const { currentCarosel, carousels } = this.state;
        let isLive = false;
        if (carousels[currentCarosel]) {
            isLive = carousels[currentCarosel].data.isLive;
        }
        return (
            <GridContainer translateY={this.state.position.translateY}>
                <div className="carousels">
                    {this.renderCarousels()}
                </div>
                <Cursor isCardLive={isLive} />
            </GridContainer>
        );
    }

}
