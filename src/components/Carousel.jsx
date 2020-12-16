import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default class Carousel extends React.Component {

    state = {
        currentCard: 0,
        position: {
            translateX: 0
        }
    }

    renderCards(cards) {
        let arrCards = [];
        for (let i in cards) {
            const cardData = cards[i];
            cardData.index = i;
            arrCards.push(<Card data={cardData} key={i} isCurrent={this.state.currentCard === parseInt(i)} />)
        }
        return arrCards;
    }

    componentWillReceiveProps(props) {
        const { currentCard } = props;
        const cardWidth = window.innerWidth / 100 * (11 + 1.3 + .50);
        const finalPosition = currentCard * cardWidth;
        this.setState({
            ...this.state,
            currentCard,
            position: {
                translateX: finalPosition
            }
        });
     }

    render() {
        const { title, cards } = this.props.data;
        return (
            <Container translateX={this.state.position.translateX}>
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

const Container = styled.div`
    color: #FFF;
    margin: 1vh 0 2vh 1.5vw;
    height: 35vh;
    position:relative;
    overflow: hidden;
    & .cards {
        position:absolute;
        margin-top: 1vh;
        display: flex;
        flex-wrap: nowrap;
        transform: ${props => "translate(-" + props.translateX + "px, 0)"};
        transition: all .2s;
    }
    & h1 {
        text-transform: capitalize;
        font-size:2vw;
    }
    
`;