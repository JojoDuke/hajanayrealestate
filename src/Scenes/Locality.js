import React from 'react';
import LocalityPage from '../Components/pages/LocalityPage/LocalityPage';

/*SASS*/
import './scenes.scss';

const Locality = () => {
    return(
        <div className="page-container">
            <div className="heading-wrapper">
                <h1 className="page-title">
                    Lokalita
                </h1>
                <div className="border-helper"></div>
            </div>
            <div className="page-content">
                <LocalityPage />
            </div>
        </div>
    );
}

export default Locality;