import React from 'react';

/* OWN */
import HouseChoicePage from '../Components/pages/HouseChoicePage/HouseChoicePage'; 

const OfferedHouses = () => {
    return(
        <div className="page-container">
            <div className="heading-wrapper">
                <h1 className="page-title">
                    Nabídka domů
                </h1>
                <div className="border-helper"></div>
            </div>
            <div className="page-content">
                <HouseChoicePage />
            </div>
        </div>
    );
}

export default OfferedHouses;