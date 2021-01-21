import styled from 'styled-components';
import { COLORS } from '../../styles';

export const Container = styled.div`
  display: inline-flex;
  width: ${props => props.size ? `${props.size}vw`: `18vw`};  
  height: 3.6vw;
  border-radius: .3vw;
  position: relative;
  /* To do: Adicionar DS ao projeto faz parte de outra Task. */
  background-color: #202425;
  color: ${COLORS.textSecondary};
  font-size: 1.1vw;
  line-height: 1.43;
  letter-spacing: 0.5px;

  :focus {
    outline: none;
  }
`;

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1vw;
  background-color: #202425;
  border-radius: .3vw;
  position: absolute;

  ${props => props.expanded && `
    z-index: 2;
    background: none !important;

    :hover, &.active {
      box-shadow: none !important;
    }
  `}

  > i {
    &:first-child {
      padding-right: 1vw;  
    }
    &:last-of-type {
      margin-left: auto;  
    }

    &.sky-icon-line-arrow-down {
      font-size: 1.6vw;
    }
  } 

  :hover, &.active  {
    background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 100%);
    box-shadow: 0 0 0 2px #363D3E, 0 0 0 4px #fff;
  }
`;

export const BoxOptionList = styled.div`
  display: ${props => props.expanded ? 'flex' : 'none'};
  width: 20vw;
  position: absolute;
  z-index: 2;
  top: 101%;
  background: #363d3e;
  padding: 20px 15px;
  border-radius: 6px;
  ${props => props.align == "right" ? 'right: 0' : 'left: 0'}
`;

export const OptionsList = styled.div`
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 5px
  }

  li {
    height: 3.6vw;
    display: flex;
    align-items: center;
    padding: 0 10px;

    :hover, &.active { 
      color: #fff;
      font-weight: bold;

      :after {
        opacity:1;
      }
    }

    :after { 
      content: '';
      background: rgba(255, 255, 255, 0.1);
      width: 100%;
      height: 3vw;
      position: absolute;
      left: 0;
      border-radius: 5px;
      box-shadow: 0 0 0 2px #363D3E, 0 0 0 4px #fff;
      opacity: 0;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 1;
  display: ${props => props.expanded ? 'block' : 'none'};
`;
