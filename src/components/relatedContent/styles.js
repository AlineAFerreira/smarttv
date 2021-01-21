import styled from "styled-components";

const Container = styled.div`

`;

const Title = styled.h1`
    font-size: 4vh;
    color: #FFF;
`;

const Metadata = styled.div`
    color: rgba(255, 255, 255, .7);
    font-size: 2vh;
    margin: 3vh 0;
    & .card-rating{
        padding: .3vh .9vh;
        margin-right: .7vh;
    }
`;

export { Container, Title, Metadata };