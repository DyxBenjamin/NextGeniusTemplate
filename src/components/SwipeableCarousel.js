import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableCards from './SwipeableCards';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableCarousel = ({cards}) => {
    const [index, setIndex] = useState(0);

    const handleChangeIndex = (index) => {
        setIndex(index);
    };

    return (
        <AutoPlaySwipeableViews interval={3000} onChangeIndex={handleChangeIndex}>
            {cards.map((_, i) => (
                <SwipeableCards key={i} index={i} img={_.image} title={_.name} />
            ))}
        </AutoPlaySwipeableViews>
    );
};

export default SwipeableCarousel;
