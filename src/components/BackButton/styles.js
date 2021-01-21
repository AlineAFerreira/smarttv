import styled from 'styled-components';
import { COLORS } from '../../styles';

export const BackBtn = styled.div`
    width: 8vh;
    height: 8vh;
    color: ${COLORS.textSecondary};
    background-color: ${COLORS.bgBar};
    position: absolute;
    z-index: 1;
    top: 8vh;
    left: 6vh;
    border: none;
    border-radius: 50%;
    text-align:center;
    line-height:8vh;

    &::before {
        content: '\\e918';
        font-family: 'SKY-Icon-Font';
        font-size: 4vh;
    }

    :hover, :active, :focus, &.active {
        background-image: linear-gradient(to bottom, ${COLORS.textLinkDefault}, ${COLORS.brand});
    }
`;