import React from 'react';
import { getImageByType, getPercent } from '../../util/Utils';
import ParentalRating from '../ParentalRating';
import { CardL, Infos, Image, Line, Title, Schedule, Favorites, ProgressBar } from './styles';

export default class CardLiveHome extends React.Component {
    get percentOfShow() {
        const { startTime, endTime } = this.props.data;
        const startTimeInMinutes = (startTime.hour * 60) + startTime.minutes;
        const endTimeInMinutes = (endTime.hour * 60) + endTime.minutes;
        const durationInMinutes = endTimeInMinutes - startTimeInMinutes;
        const TempCurrentTime = {
            hour: 16,
            minutes: 15
        };
        const currentTimeInMinutes = (TempCurrentTime.hour * 60) + TempCurrentTime.minutes;
        const currentWacthedTimeInMinutes = currentTimeInMinutes - startTimeInMinutes;
        
        return currentWacthedTimeInMinutes * 100 / durationInMinutes;

    }
    render() {
        const { images, rating, startTime, endTime, title, favorites } = this.props.data;
        return (
            <CardL>
                <Image background={images ? getImageByType(images, 3) : null} />
                <Infos>
                    <Line>
                        <ParentalRating rating={rating} />
                        <Title>{title}</Title>
                    </Line>
                    <Line justify={true}>
                        <Schedule>
                            {startTime.hour}h{startTime.minutes} às {endTime.hour}h{endTime.minutes}
                        </Schedule>
                        <Favorites>
                            {favorites} <span className='sky_icon-filled-favorite sky_icon' />
                        </Favorites>
                    </Line>
                    <Line>
                        <ProgressBar percent={this.percentOfShow} />
                    </Line>
                </Infos>
            </CardL >
        )
    }
}