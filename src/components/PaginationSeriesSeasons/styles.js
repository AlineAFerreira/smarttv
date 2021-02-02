import styled from "styled-components";
import { COLORS } from "../../styles";

const { bgActive, bgBar, textLinkDefault, textPrimary, brand } = COLORS;

const Container = styled.div`
    display: flex;
`;

const bgsButtons = {
    default: bgBar,
    current: bgActive,
    selected: `linear-gradient(to bottom,${textLinkDefault} , ${brand})`
}

const Button = styled.div`
    margin-right:2vh;
    font-size: 2.5vh;
    font-weight: bold;
    height: 6vh;
    line-height: 6vh;
    text-align: center;
    border-radius: 1vh;
    color: ${textPrimary};
    width: ${props => props.isCurrent ? '25vh' : '8vh'};
    transition: all .2s;
    background: ${props => props.isSelected ? bgsButtons.selected : props.isCurrent ? bgsButtons.current : bgsButtons.default};
    position: relative;
    overflow: hidden;
`;

export { Container, Button };