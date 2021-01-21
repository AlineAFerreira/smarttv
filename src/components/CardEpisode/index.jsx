import React from 'react';
import { Container, Image, Infos, Title, Description } from './styles';
import ParentalRating from '../ParentalRating';
export default class CardEpisode extends React.Component {
    render() {
        const { rating, episodeTitle: title, images, description, isCurrent, episodeNumber } = this.props.data;
        return (
            <Container>
                <Image url={images[0].url} />
                <Infos isCurrent={isCurrent}>
                    <Title>
                        <ParentalRating rating={rating} />
                        <h2>
                            {title}
                        </h2>
                    </Title>
                    <Description>
                        {description}
                    </Description>
                </Infos>
            </Container>
        )
    }
}