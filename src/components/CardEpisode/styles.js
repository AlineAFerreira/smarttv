import styled from "styled-components";
import { COLORS } from "../../styles";

const { textPrimary } = COLORS;

const CardEpSizes = {
    heightRelatedSizes: {
        width: 45,
        height: 60,
        imageHeight: 27
    }
}
const Container = styled.div`
    height: ${CardEpSizes.heightRelatedSizes.height}vh;
    width: ${CardEpSizes.heightRelatedSizes.width}vh;
    position: relative;

`;

const Image = styled.div`
    height: ${CardEpSizes.heightRelatedSizes.imageHeight}vh;
    background-image: ${props => `url(${props.url})`};
    background-size: cover;
    border-radius: 1vh;
`;

const Infos = styled.div`
    color: ${textPrimary};
    margin-top: 3vh;
    opacity: ${props => props.isCurrent ? '1' : '.5'};
    transition: all .1s;
    transition-delay: .2s;
`;
const Title = styled.div`
    display: flex;
    .card-rating {
        padding:.4vh;
    }
    h2 {
        font-size: 2.2vh;
        font-weight: normal;
        margin-left: 1.8vh;
    }
`;

const Description = styled.div`
    font-size: 2.1vh;
    line-height: 3.3vh;
    margin-top: 1.8vh;
`;


export { Container, Image, Infos, Title, Description, CardEpSizes };