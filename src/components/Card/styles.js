import styled from 'styled-components';
import { COLORS } from '../../styles';

const { bgBox, textDisable } = COLORS;


const CardSizes = {
    heightRelatedSizes: {
        width: 19,
        height: 30,

    }
}


const CardTypes = {
    content: 'content',
    button: 'button'
}

const Container = styled.div`
    width: ${CardSizes.heightRelatedSizes.width}vh;
    height: ${CardSizes.heightRelatedSizes.height}vh;
    background: ${props => props.type === CardTypes.content ? 'url(' + props.cover.url + ')' : bgBox};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    border-radius: .6vh;
    .infos {
        height: ${CardSizes.heightRelatedSizes.height}vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3vh;
        .sky_icon {
            font-size: 7vh;
        }
        .text {
            height: 40%;
            font-size: 3vh;
            .title {
                display: block;
            }
            .qty {
                color: ${textDisable};
                line-height: 6vh;
            }
        }
    }
    `;


export { Container, CardSizes, CardTypes };