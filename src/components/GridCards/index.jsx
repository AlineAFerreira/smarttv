import React from 'react'
import { tempData } from '../../util/tempDataCarousels';
import Card from '../Card';
import { CardTypes, CardSizes } from '../Card/styles';
import { Cursor } from '../GridCarousels/styles';
import { getPercent, KeyCodes } from '../../util/Utils';
import { Container, Cards, cardMarginHeightRelated } from './styles';
import { Events } from '../../util/Events';

export default class GridCards extends React.Component {
    state = {
        currentCard: 0,
        currentLine: 0
    }

    constructor(props) {
        super(props);
        this.handlerKey = this.handlerKey.bind(this);
    }

    componentDidMount() {
        document.addEventListener(Events.keydown, this.handlerKey, false);
    }
    componentWillUnmount() {
        document.removeEventListener(Events.keydown, this.handlerKey, false);
    }

    get gridConfigs() {
        const { innerHeight: screenHeight, innerWidth: screenWidth } = window;
        const qtyCards = this.props.cards.length;
        const displayWidth = screenWidth - getPercent(screenWidth, 10);
        const cardWidthWithMargin = getPercent(screenHeight, (CardSizes.heightRelatedSizes.width + cardMarginHeightRelated));
        const qtyPLine = Math.trunc(displayWidth / cardWidthWithMargin);
        const qtyLines = Math.ceil(qtyCards / qtyPLine);
        let qtyLastLine = qtyCards % qtyPLine;
        qtyLastLine = qtyLastLine === 0 ? qtyPLine : qtyLastLine;
        return {
            qtyLines,
            qtyPLine,
            qtyLastLine
        }
    }

    changeCard(direction) {
        const { currentCard: crtCard, currentLine } = this.state;
        const { qtyPLine, qtyLastLine, qtyLines } = this.gridConfigs;
        const isLastLine = currentLine === qtyLines - 1;
        let currentCard = crtCard;
        if (direction) {
            currentCard = crtCard >= qtyPLine - 1 ? qtyPLine - 1 : crtCard + 1;
        } else {
            currentCard = crtCard === 0 ? 0 : crtCard - 1;
        }
        currentCard = !isLastLine ? currentCard : currentCard > qtyLastLine - 1 ? qtyLastLine - 1 : currentCard;
        this.setState({
            ...this.state,
            currentCard
        })
    }

    changeLine(direction) {
        const { currentLine: crtLine, currentCard: crtCard } = this.state;
        const { qtyLines, qtyLastLine } = this.gridConfigs;
        const isLastLine = crtLine === qtyLines - 2;
        let currentLine = crtLine;
        let currentCard = crtCard;
        if (direction) {
            currentLine = currentLine === qtyLines - 1 ? qtyLines - 1 : crtLine + 1;
            currentCard = isLastLine && currentCard > qtyLastLine - 1 ? qtyLastLine - 1 : currentCard;
        } else {
            currentLine = currentLine === 0 ? 0 : currentLine - 1;
        }
        this.setState({
            ...this.state,
            currentLine,
            currentCard
        })
    }

    handlerKey(evt) {
        if (evt.keyCode === KeyCodes.KEY_RIGHT) {
            this.changeCard(true);
        }
        if (evt.keyCode === KeyCodes.KEY_LEFT) {
            this.changeCard(false);
        }
        if (evt.keyCode === KeyCodes.KEY_DOWN) {
            this.changeLine(true);
        }
        if (evt.keyCode === KeyCodes.KEY_UP) {
            this.changeLine(false);
        }
    }

    renderCards() {
        const gridConfig = this.gridConfigs;
        let arrCards = [];
        const { cards } = this.props;
        for (let index in cards) {
            const cardData = cards[index];
            arrCards.push(<Card data={cardData} type={CardTypes.content} key={index} />);
        }
        return arrCards;
    }

    get getCursorPosition() {
        const { qtyLines } = this.gridConfigs;
        let { currentLine, currentCard } = this.state;
        const { innerHeight: screenHeight } = window;
        const spaceBetweenBorderAndCard = .0079;
        const cardWidthWithMargin = getPercent(screenHeight, (CardSizes.heightRelatedSizes.width + cardMarginHeightRelated));
        const cardHeightWithMargin = getPercent(screenHeight, (CardSizes.heightRelatedSizes.height + cardMarginHeightRelated - .8)); // "-.8" para compesar a borda do destaque
        const top = currentLine === qtyLines - 1 ? cardHeightWithMargin : -screenHeight * spaceBetweenBorderAndCard;
        const left = (currentCard * cardWidthWithMargin) - screenHeight * spaceBetweenBorderAndCard;
        return {
            top,
            left
        }
    }

    get getTranslatePosition() {
        let { currentLine } = this.state;
        const { innerHeight: screenHeight } = window;
        const cardHeightWithMargin = getPercent(screenHeight, (CardSizes.heightRelatedSizes.height + cardMarginHeightRelated));
        currentLine = currentLine === this.gridConfigs.qtyLines - 1 ? this.gridConfigs.qtyLines - 2 : currentLine;
        let translateY = cardHeightWithMargin * currentLine;
        return translateY;
    }

    render() {
        const { title, hideLength, cards } = this.props;
        return (
            <Container>
                <Cards cursorPostion={this.getCursorPosition} translateY={this.getTranslatePosition}>
                    <div className="infos">
                        <h2>{title}</h2>
                        <span style={{ display: hideLength ? 'none' : 'block' }}>
                            {cards.length} conteúdos
                        </span>
                    </div>
                    <div className="content">
                        <div>
                            {this.renderCards()}
                        </div>
                    </div>
                    <Cursor className="cursor" />
                </Cards>
            </Container>
        );
    }
}