import React from 'react';
import styled from 'styled-components';
import { tempData } from '../util/tempDataCarousels';
import { KeyCodes } from '../util/Utils';
import Carousel from './Carousel';

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
        const carouselHeight = window.innerHeight / 100 * (35 + 2);
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
            newCurrentCard = currentCard === totalCards ? totalCards : currentCard + 1;
        } else {
            newCurrentCard = currentCard === 0 ? 0 : currentCard - 1;
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
        document.addEventListener("keydown", this.handlerKey, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handlerKey, false);
    }
    renderCarousels() {
        let carousels = [];
        this.state.carousels.forEach((carousel, i) => {
            carousels.push(<Carousel data={carousel.data} key={i} currentCard={this.state.carousels[i].currentCard} />)
        });
        return carousels;
    }

    render() {
        console.log(this.state.position.translateY)
        return (
            <GridContainer translateY={this.state.position.translateY}>
                <div className="carousels">
                    {this.renderCarousels()}
                </div>
            </GridContainer>
        );
    }

}
const GridContainer = styled.div`
    margin-top: 5vh;
    position: relative;
    overflow: hidden;
    & .carousels {
        transition: all .2s;
        transform: ${props => "translate(0, -" + props.translateY + "px)"};
        height: 45vh;
        width: 93vw;

    }
`;