import React from 'react';
import Card from '../Card';
import { CardSizes, CardTypes } from '../Card/styles';
import { Container, cardMarginHeightRelatedOnCarousel, timeAnimationInSeconds } from './styles';
import { getPercent } from '../../util/Utils';
import CardLiveHome from '../CardLiveHome';

export default class Carousel extends React.Component {

    state = {
        currentCard: 0,
        position: {
            animate: true,
            translateX: 0
        }
    }

    renderCards(cards) {
        let arrCards = [];
        cards = [
            ...cards,
            ...cards
        ]
        for (let i in cards) {
            const cardData = cards[i];
            cardData.index = i;
            if (this.props.isLive) {
                arrCards.push(<CardLiveHome data={cardData} type={cardData.type === 'button' ? CardTypes.button : CardTypes.content} key={i} />);
            } else {
                arrCards.push(<Card data={cardData} type={cardData.type === 'button' ? CardTypes.button : CardTypes.content} key={i} />);
            }
        }
        return arrCards;
    }

    componentWillReceiveProps(props) {
        const { currentCard } = props;
        const HRWidth = this.props.isLive ? CardSizes.heightRelatedSizes.width * 2 : CardSizes.heightRelatedSizes.width;
        const cardWidth = getPercent(window.innerHeight, (HRWidth + cardMarginHeightRelatedOnCarousel));
        const finalPosition = currentCard * cardWidth;
        this.setState({
            ...this.state,
            currentCard,
            position: {
                animate: true,
                translateX: finalPosition
            }
        }, () => {
            if (this.state.currentCard === this.props.data.cards.length) {
                // waiting for the animation ends
                setTimeout(() => {
                    this.setState({
                        currentCard: 0,
                        position: {
                            animate: false,
                            translateX: 0
                        }
                    })
                }, timeAnimationInSeconds * 1000) // convert seconds in milliseconds
            }
        });
    }

    render() {
        const { title, cards } = this.props.data;
        return (
            <Container animate={this.state.position.animate} translateX={this.state.position.translateX}>
                <h1>
                    {title}
                </h1>
                <div className="cards">
                    {this.renderCards(cards)}
                </div>
            </Container>
        );
    }
}