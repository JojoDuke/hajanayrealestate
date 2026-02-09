import React, { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';

/*OWN*/
import scrollDownButton from '../assets/scrollDownArrow.svg';
import HouseDetailPage from '../Components/pages/HouseDetailPage/HouseDetailPage';
import BackendDataContext from '../Context/BackendDataContext';
import img from '../assets/img/home_cover.jpg';

/*SASS*/
import './HouseDetail.scss';


const HouseDetail = () => {

    const { id } = useParams();

    const { currentState } = useContext(BackendDataContext);
    const housesArray = [...currentState.houses];

    // Map URL number to house name (1→A1, 2→A2, 3→A3, 4→A4, 5→A5)
    const urlToHouseName = {
        '1': 'A1',
        '2': 'A2',
        '3': 'A3',
        '4': 'A4',
        '5': 'A5'
    };

    const houseName = urlToHouseName[id];
    const house = housesArray.find((house) => house.name === houseName);

    const scrollToRef = (ref) => window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: 'smooth' })
    const myRef = useRef(null)

    const executeScroll = () => {
        if (myRef !== null) {
            scrollToRef(myRef)
        }
    }


    return (
        <>
            {house &&
                <div className="page-container">
                    <div className="house-detail-hero-bg-container">
                        <div id="house-detail-relative-container">
                            <div className="house-detail-hero-bg-cover"></div>
                            <img src={(process.env.REACT_APP_BACKEND_SERVER || "https://api.moderni-zelesice.cz") + house.title_image} className="house-detail-cover-img" alt="titulní obrázek domu" loading="lazy" />
                        </div>
                    </div>
                    <div className="house-detail-hero-content">
                        <div className="title-scroll-container">
                            <h1>{house.name}</h1>
                            <img src={scrollDownButton} alt="Tlačítko posunout dolů" onClick={executeScroll} />
                        </div>
                    </div>
                    <div className="page-content">
                        <HouseDetailPage house={house} refProp={myRef} />
                    </div>
                </div>
            }
        </>
    );
}

export default HouseDetail;