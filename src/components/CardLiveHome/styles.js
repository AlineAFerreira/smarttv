import styled from "styled-components";
import { COLORS } from "../../styles";
import { CardSizes } from '../Card/styles';

const { width: widthCard, height: heightCard } = CardSizes.heightRelatedSizes;
const { textDisable, textPrimary, bgBox, bgBar, brand } = COLORS;
const CardL = styled.div`
    width: ${widthCard * 2}vh;
    height: ${heightCard}vh;
    position: relative;

`;

const Infos = styled.div`
    background-color: ${bgBox};
    height: ${heightCard / 2}vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Image = styled.div`
    background-color: ${bgBar};
    background-image: ${props => props.background ? 'url(' + props.background.url + ')' : null};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: ${heightCard / 2}vh;
`;

const Line = styled.div`
    display: flex;
    justify-content: ${props => props.justify ? 'space-between' : 'flex-start'};
    padding: 0 2vh;
    font-size: 2.4vh;
    color: ${textDisable};
    align-items: center;
    & .card-rating {
        padding: .2vh;
        width: 4vh;
        margin-right: 1vh;
    }
    `;

const Title = styled.h2`
    font-size: 2.8vh;
    color: ${textPrimary};
`;

const Schedule = styled.div`
    letter-spacing: 0.4px;
 `;

const Favorites = styled.div``;

const ProgressBar = styled.div`
    width: ${(widthCard * 2) - 4}vh;
    background-color: ${bgBar};
    height: 1vh;
    border-radius: 1vh;
    &:after {
        border-radius: 1vh;
        height: 1vh;
        background-color: ${brand};
        width: ${props => props.percent}%;
        display: block;
        content: ' ';
    }
`;

export { CardL, Infos, Image, Line, Title, Schedule, Favorites, ProgressBar };