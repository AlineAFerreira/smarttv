import React from 'react';
import { Button, Container } from './styles';

export default class PaginationSeriesSeasons extends React.Component {
    renderButtons() {
        const { current, qtyButtons, selected } = this.props;
        let retArr = [];
        for (let i = 0; i < qtyButtons; i++) {
            const isCurrent = i === current;
            retArr.push(
                <Button key={i} isCurrent={isCurrent} isSelected={isCurrent && selected} number={i + 1} onClick={()=>this.props.changeCurrentSeason(i)}>
                    {isCurrent ? `Temporada ${i + 1}` : i + 1}
                </Button>
            );
        }
        return retArr;
    }
    render() {
        return (
            <Container>
                {this.renderButtons()}
            </Container>
        )
    }
}
