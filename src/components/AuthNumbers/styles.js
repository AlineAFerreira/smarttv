import styled from "styled-components";

export const Numbers = styled.div`
    color: #FFF;
    display: flex;
    font-size: 8.5vh;
    margin-top: 2vh;
    font-weight: bold;
    & div {
        border: .1vh solid #EEE;
        border-radius: 1.1vh;
        margin-left: .7vw;
        width: 6.25vw;
        height: 13vh;
        line-height: 12vh;
        text-align:center
    }
    & div:first-child {
        margin-left: 0
    }
`;