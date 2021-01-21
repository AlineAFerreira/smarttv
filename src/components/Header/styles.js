import styled from 'styled-components';
import { COLORS } from '../../styles';


export const Container = styled.header`
  margin: 2vw 0 1vw;

  span {
    letter-spacing: .1vmin;
    color: ${COLORS.textSecondary};
  }

  h1 {
    color: #fff;
    margin-top: .4vw;
  }
`;