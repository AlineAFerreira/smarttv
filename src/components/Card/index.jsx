import React from 'react';
import { Container, CardTypes } from './styles';
import { getImageByType } from '../../util/Utils';

export default class Card extends React.Component {
    render() {
        if (this.props.type === CardTypes.content) {
            const { images } = this.props.data;
            return (
                <Container type={this.props.type} cover={getImageByType(images, 3)} />
            );
        } else {
            const { icon, title, subTitle } = this.props.data;
            return (
                <Container type={this.props.type}>
                    <div className="infos">
                        <img src={icon} />
                        <div className="text">
                            <span className="title">
                                {title}
                                <span>
                                    {subTitle}
                                </span>
                            </span>
                        </div>
                    </div>
                </Container>
            )
        }
    }
}