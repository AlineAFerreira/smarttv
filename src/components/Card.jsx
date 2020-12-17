import React from 'react';
import styled from 'styled-components';
import { getImageByType } from '../util/Utils';

export default class Card extends React.Component {
    render() {
        const { index, images } = this.props.data;
        return (
            <Container isFirst={parseInt(index) === 0} cover={getImageByType(images, 3)} isCurrent={this.props.isCurrent} />
        );
    }
}

const Container = styled.div`
    width: 11vw;
    height: 16vw;
    background-image: ${props => 'url(' + props.cover.url + ')'};
    background-size: contain;
    border: ${props => props.isCurrent ? '.25vw solid #FFF' : '.25vw solid #161819'};
    border-radius: .6vh;
    margin-left: ${props => props.isFirst ? '0vw' : '1.3vw'};
`;