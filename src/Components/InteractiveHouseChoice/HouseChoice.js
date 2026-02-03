import React from 'react';
import ImageMap from './ImageMap/ImageMap';

const HouseChoice = ({houses}) => {
    return (
        <div className="house-choice">
            <ImageMap houses={houses}/>
        </div>
    );
}

export default HouseChoice;