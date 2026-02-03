import React, { useContext } from 'react';
import HouseChoice from '../../InteractiveHouseChoice/HouseChoice';
import { useWindowSize } from '../../../Utils/useWindowSize';
import MobileHouseChoice from '../../MobileHouseChoice/MobileHouseChoice';
import BackendDataContext from '../../../Context/BackendDataContext';
import housesImg from '../../../assets/img/Components/InteractiveHouses/interactive_houses_background.jpg';

/*SASS*/
import './HouseChoicePage.scss'; 

const HouseChoicePage = () => {

    const windowSize = useWindowSize();
    const { currentState } = useContext(BackendDataContext);
    const housesArray = [...currentState.houses];
    
    return (
        <div className="house-choice-page-container">
            {windowSize.width > 769 &&
                <section className="house-choice-section">
                    <HouseChoice houses={housesArray}/>
                </section>
            }
                <section className="mobile-house-choice-section">
                    <MobileHouseChoice houses={housesArray} />
                </section>
            
        </div>
    );
}

export default HouseChoicePage;