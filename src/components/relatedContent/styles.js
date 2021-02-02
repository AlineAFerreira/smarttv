import styled from "styled-components";
import { COLORS } from "../../styles";

const Container = styled.div`

`;

const { textSecondary, textPrimary } = COLORS;

const Title = styled.h1`
    font-size: 4vh;
    color: ${textPrimary};
`;

const Metadata = styled.div`
    color: ${textSecondary};
    font-size: 2vh;
    margin: 3vh 0;
    & .card-rating{
        padding: .3vh .9vh;
        margin-right: .7vh;
    }
`;

export { Container, Title, Metadata };