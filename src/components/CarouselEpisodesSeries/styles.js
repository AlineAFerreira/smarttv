import styled from "styled-components";
import { CardEpSizes } from '../CardEpisode/styles'

const marginBetweenCardsHeightRelated = 2;

const Container = styled.div`
    width: 90vw;
    height: 80vh;
    position: relative;
    & h1 {
        font-size: 3vh;
        color: #FFF
}`;

const Buttons = styled.div`
    margin: 2vh 0;
`;

const CarouselEpisodes = styled.div`
    display: flex;
    position: absolute;
    flex-wrap: nowrap;
    transform: ${props => "translate(-" + props.translateX + "px, 0)"};
    transition: all .3s;
    transition-delay: .1s;
    & > div {
        margin-right: ${marginBetweenCardsHeightRelated}vh;
    }
`;

const Cursor = styled.div`
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    position: absolute;
    width: ${CardEpSizes.heightRelatedSizes.width + 1.6}vh;
    height: ${CardEpSizes.heightRelatedSizes.imageHeight + 1.6}vh;
    border-radius: 1vh;
    margin: -.8vh;
    border: .25vw solid #FFF;
    font-family: 'SKY-Icon-Font' !important;
    ::before {
        width: 9vh;
        height: 9vh;
        transition: all .05s;
        opacity: ${props => props.showPlay ? '1' : '0'};
        background-image: linear-gradient(#ff5454, #d81818);
        color: #FFF;
        text-align: center;
        line-height: 8.8vh;
        font-size: 4vh;
        border-radius: 50%;
        display: block;
        margin-left: ${((CardEpSizes.heightRelatedSizes.width + 1.6) / 2) - 4.5}vh;
        margin-top: ${((CardEpSizes.heightRelatedSizes.imageHeight + 1.6) / 2 - 9) + 5}vh;
    }
`;

const Display = styled.div`
    overflow: hidden;
    position: absolute;
    width: 90vw;
    height: 60vh;
`;

export { Container, Buttons, CarouselEpisodes, Cursor, Display, marginBetweenCardsHeightRelated };