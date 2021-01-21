import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const bgsButtons = {
    default: "#272b2d",
    current: "#363d3e",
    selected: "linear-gradient(to bottom, #ff5454, #d81818)"
}

const Button = styled.div`
    margin-right:2vh;
    font-size: 2.5vh;
    font-weight: bold;
    height: 6vh;
    line-height: 6vh;
    text-align: center;
    border-radius: 1vh;
    color: #FFF;
    width: ${props => props.isCurrent ? '25vh' : '8vh'};
    transition: all .2s;
    background: ${props => props.isSelected ? bgsButtons.selected : props.isCurrent ? bgsButtons.current : bgsButtons.default};
    position: relative;
    overflow: hidden;
`;

export { Container, Button };