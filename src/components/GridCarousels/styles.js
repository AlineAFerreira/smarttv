import styled from 'styled-components';
import { CardSizes } from '../Card/styles';

const GridContainer = styled.div`
    margin-top: 5vh;
    position: relative;
    overflow: hidden;
    & .carousels {
        width: 93vw;
        transition: all .2s;
        transform: ${props => "translate(0, -" + props.translateY + "px)"};
        height: 45vh;

    }
`;

const Cursor = styled.div`
    border: .25vw solid #FFF;
    width: ${props => props.isCardLive ? ((CardSizes.heightRelatedSizes.width * 2) + 1.6) + 'vh' : (CardSizes.heightRelatedSizes.width + 1.6) + 'vh'};
    height: ${CardSizes.heightRelatedSizes.height + 1.6}vh;
    border-radius: 1vh;
    top: 5.2vh;
    left: 2.2vh;
    position: absolute;
    transition: all .2s;
`;

export { Cursor, GridContainer };