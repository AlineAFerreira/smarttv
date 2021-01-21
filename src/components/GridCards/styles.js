import styled from 'styled-components';
import { CardSizes } from '../Card/styles';

const cardMarginHeightRelated = 2;

const Container = styled.div`
    position: relative;
`;

const Cards = styled.div`
    position: relative;
    margin-left: 1vh;
    & .cursor {
        top: ${props => `calc(${props.cursorPostion.top}px + 7vh) !important`};
        left: ${props => `${props.cursorPostion.left}px !important`};
        transition: all .2s;
    }
    & .infos {
        display: flex;
        justify-content: space-between;
        color: rgba(255, 255, 255, 0.7);
        position: absolute;
        width:  80vw;
        font-size: 2.7vh;
        & h2 {
            color: #FFF;
            font-size: 3.4vh;
        }
    }
    & .content {
        position: relative;
        overflow: hidden;
        height: ${(CardSizes.heightRelatedSizes.height + cardMarginHeightRelated) * 2}vh;
        top:5vh;
        & > div {
            transform: ${props => `translate(0, -${props.translateY}px)`};
            transition: all .2s;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
         & > div  {
            margin: ${cardMarginHeightRelated}vh ${cardMarginHeightRelated}vh 0 0;
        }
    }
    }
`;

export { Container, Cards, cardMarginHeightRelated };