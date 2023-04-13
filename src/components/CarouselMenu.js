import { useState } from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import CarouselMenuCards from "@components/CarouselMenuCards";
import SwipeableViews from "react-swipeable-views";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarouselMenu = ({cards}) => {
    const [index, setIndex] = useState(0);

    const handleChangeIndex = (index) => {
        setIndex(index);
    };

    return (
        <AutoPlaySwipeableViews interval={3000} onChangeIndex={handleChangeIndex}>
            {cards.map((_, i) => (
                <CarouselMenuCards key={i} index={i} recipeName={_.recipeName} title={_.name} calories={_.calories} image={_.image} />
            ))}
        </AutoPlaySwipeableViews>
    );
};

export default CarouselMenu;
