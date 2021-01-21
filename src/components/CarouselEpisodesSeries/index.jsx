import React from 'react';
import { Events } from '../../util/Events';
import { getPercent, KeyCodes } from '../../util/Utils';
import CardEpisode from '../CardEpisode';
import { CardEpSizes } from '../CardEpisode/styles';
import PaginationSeriesSeasons from '../PaginationSeriesSeasons';
import { Buttons, CarouselEpisodes, marginBetweenCardsHeightRelated, Container, Cursor, Display } from './styles';

const componentsOnScreen = {
    Pagination: 'pagination',
    Carousel: 'carousel'
}

export default class CarouselEpisodesSeries extends React.Component {
    state = {
        focus: componentsOnScreen.Carousel,
        currentSeason: 0,
        currentCard: 0,
        carouselPosition: 0,
        showPlay: true
    }

    componentDidMount() {
        document.addEventListener(Events.keydown, this.handlerKey, false);
    }
    componentWillUnmount() {
        document.removeEventListener(Events.keydown, this.handlerKey, false);
    }

    getFirstEpIndex(seasonNumber) {
        let countEps = 0;
        this.props.data.seasons.forEach((season, index) => {
            if (seasonNumber > index) {
                countEps += season.length;
            }
        });
        return countEps;
    }

    changeCurrentSeason = season => {
        const { seasons } = this.props.data, totalSeason = seasons.length - 1;
        let { currentSeason, focus } = this.state;

        if (season === true) {
            if (currentSeason < totalSeason) {
                currentSeason++;
            }
        } else if (season === false) {
            if (currentSeason > 0) {
                currentSeason--;
            }
        } else {
            currentSeason = season;
            focus = componentsOnScreen.Pagination;
        }


        this.setState({
            ...this.state,
            focus
        }, () => {
            this.changeCurrentCard(this.getFirstEpIndex(currentSeason));
        });

    }

    handlerKeyRight() {
        if (this.state.focus === componentsOnScreen.Pagination) {
            this.changeCurrentSeason(true);
        }
        if (this.state.focus === componentsOnScreen.Carousel) {
            this.changeCurrentCard(true);
        }
    }
    handlerKeyLeft() {
        if (this.state.focus === componentsOnScreen.Pagination) {
            this.changeCurrentSeason(false);
        }
        if (this.state.focus === componentsOnScreen.Carousel) {
            this.changeCurrentCard(false);
        }
    }

    get totalCards() {
        return this.props.data.seasons.reduce((total, season) => total + season.length, 0);
    }

    seasonByEpNumber(cardIndex) {
        let ret = null, index = 0;
        this.props.data.seasons.forEach(season => {
            season.forEach(episode => {
                if (index === cardIndex) {
                    ret = episode.seasonNumber;
                }
                index++;
            })
        });
        return parseInt(ret) - 1;
    }

    changeCurrentCard(direction) {
        let { currentCard, carouselPosition } = this.state;
        const { innerHeight: screenHeight } = window,
            cardWidth = getPercent(screenHeight, CardEpSizes.heightRelatedSizes.width + marginBetweenCardsHeightRelated);
        const { totalCards } = this;
        if (direction === true) {
            currentCard = currentCard + 1 >= totalCards - 1 ? totalCards - 1 : currentCard + 1;
        } else if (direction === false) {
            currentCard = currentCard > 0 ? currentCard - 1 : 0;
        } else {
            currentCard = direction;
        }
        carouselPosition = cardWidth * currentCard;
        const currentCardHasChanged = currentCard !== this.state.currentCard;
        this.setState({
            ...this.state,
            carouselPosition,
            currentCard,
            currentSeason: this.seasonByEpNumber(currentCard),
            showPlay: !currentCardHasChanged
        }, () => {
            if (currentCardHasChanged) {
                setTimeout(() => {
                    this.setState({
                        ...this.state,
                        showPlay: true
                    })
                }, 300)
            }
        })
    }

    changeFocus(direction) {
        let { focus } = this.state;
        if (direction) {
            if (focus === componentsOnScreen.Carousel) {
                focus = componentsOnScreen.Pagination;
            }
        } else {
            if (focus === componentsOnScreen.Pagination) {
                focus = componentsOnScreen.Carousel;
            }
        }
        this.setState({
            ...this.state,
            focus
        })
    }

    handlerKey = evt => {
        if (evt.keyCode === KeyCodes.KEY_RIGHT) {
            this.handlerKeyRight();
        }
        if (evt.keyCode === KeyCodes.KEY_LEFT) {
            this.handlerKeyLeft();
        }
        if (evt.keyCode === KeyCodes.KEY_DOWN) {
            this.changeFocus(false);
        }
        if (evt.keyCode === KeyCodes.KEY_UP) {
            this.changeFocus(true);
        }
    }

    renderCards() {
        const { seasons } = this.props.data;
        let arrCards = [];
        let cardIndex = 0;
        const { currentCard, focus } = this.state;
        seasons.forEach((season, s) => {
            season.sort((a, b) => {
                const keyA = a.episodeNumber,
                    keyB = b.episodeNumber;
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });
            season.forEach((episode, e) => {
                episode.isCurrent = cardIndex === currentCard && focus === componentsOnScreen.Carousel;
                arrCards.push(
                    <CardEpisode data={episode} key={`${s}${e}`} />
                );
                cardIndex++;
            })
        });
        return arrCards;
    }

    render() {
        return (
            <Container>
                <h1>Episódios</h1>
                <Buttons>
                    <PaginationSeriesSeasons selected={this.state.focus === componentsOnScreen.Pagination} changeCurrentSeason={this.changeCurrentSeason} qtyButtons={this.props.data.seasons.length} current={this.state.currentSeason} />
                </Buttons>
                <Display>
                    <CarouselEpisodes translateX={this.state.carouselPosition}>
                        {this.renderCards()}
                    </CarouselEpisodes>
                </Display>
                <Cursor show={this.state.focus === componentsOnScreen.Carousel} showPlay={this.state.showPlay} className="sky_icon sky_icon-filled-player-play" />
            </Container>
        );
    }
}