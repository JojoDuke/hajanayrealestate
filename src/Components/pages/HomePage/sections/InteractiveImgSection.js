import React, { useContext } from 'react';
import HouseChoice from '../../../InteractiveHouseChoice/HouseChoice';
import BackendDataContext from '../../../../Context/BackendDataContext';
import { useWindowSize } from '../../../../Utils/useWindowSize';
import MobileHouseChoice from '../../../MobileHouseChoice/MobileHouseChoice';

/*SASS*/
import './InteractiveImgSection.scss';



const InteractiveImgSection = () => {

    const { currentState } = useContext(BackendDataContext);
    const windowSize = useWindowSize();

    return (
        <>
            {(windowSize.width > 769) ?

                <section className="interactive-img-section">
                    <div className="house-choice-heading-and-border-wrapper">
                        <div></div>
                        <div className="house-choice-heading-container">
                            <h1 className="house-choice-heading">Výběr domu</h1>
                        </div>
                        <div className="house-choice-heading-border-helper"></div>
                        {/*<div className="side-border-helper"></div>*/}
                    </div>
                    <div className="house-choice-map-wrapper">
                        <HouseChoice houses={currentState.houses} />
                    </div>
                    <div className="house-choice-bottom-border-helper"></div>
                </section>

                :

                <section className="interactive-img-section">
                    <h1 className="house-choice-heading">Výběr domu</h1>
                    <MobileHouseChoice houses={currentState.houses} />
                </section>

            }
        </>);
}

export default InteractiveImgSection;