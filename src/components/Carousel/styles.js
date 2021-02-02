import styled from "styled-components";
import { COLORS } from "../../styles";

const cardMarginHeightRelatedOnCarousel = 3;
const timeAnimationInSeconds = .1;
const carouselHeightHeightRelated = 35;
const carouselMarginTopHeightRelated = 2;

const Container = styled.div`
    color: ${COLORS.textPrimary};
    margin: 0 0 ${carouselMarginTopHeightRelated}vh ${cardMarginHeightRelatedOnCarousel}vh;
    height: ${carouselHeightHeightRelated}vh;
    position:relative;
    & .cards {
        position:absolute;
        margin-top: 6vh;
        display: flex;
        flex-wrap: nowrap;
        margin-left: -${cardMarginHeightRelatedOnCarousel}vh;
        transform: ${props => "translate(-" + props.translateX + "px, 0)"};
        transition: ${props => props.animate ? 'all ' + timeAnimationInSeconds + 's' : 'none'};
        & > div {
            margin-left: ${cardMarginHeightRelatedOnCarousel}vh;
        }
    }
    & h1 {
        text-transform: capitalize;
        position:absolute;
        font-size:4vh;
    }
    
`;

export { Container, cardMarginHeightRelatedOnCarousel, timeAnimationInSeconds, carouselHeightHeightRelated, carouselMarginTopHeightRelated };