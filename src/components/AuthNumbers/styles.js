import styled from "styled-components";
import { COLORS } from "../../styles";

export const Numbers = styled.div`
    color: ${COLORS.textPrimary};
    display: flex;
    font-size: 8.5vh;
    margin-top: 2vh;
    font-weight: bold;
    & div {
        justify-content: center;
        align-items: center;
        display: flex;
        border: .1vh solid ${COLORS.textSecondary};
        border-radius: 1.1vh;
        margin-left: .7vw;
        width: 12vh;
        height: 13vh;
        text-align:center
    }
    & div:first-child {
        margin-left: 0
    }
`;