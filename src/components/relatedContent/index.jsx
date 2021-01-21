import React from 'react';
import GridCards from '../GridCards';
import ParentalRating from '../ParentalRating';
import { Container, Title, Metadata } from './styles';

export default class RelatedContent extends React.Component {

    render() {
        const { title, year, rating, duration, categories, cards } = this.props.data;
        return (
            <Container>
                <Title>{title}</Title>
                <Metadata>
                    <ParentalRating rating={rating} /> {year} &bull; {duration} &bull; {categories}
                </Metadata>
                <GridCards title="Conteúdos sobre o mesmo tema" hideLength={false} cards={cards} />
            </Container>
        )
    }
}