import React from 'react';
import { useWindowSize } from '../../../Utils/useWindowSize';
import ImageGallery from '../../ImageGallery/ImageGallery';
import FormSection from '../HomePage/sections/FormSection';
import GridInfoSection from './GridInfoSection/GridInfoSection';

/*SASS*/
import './HouseDetailPage.scss';

const HouseDetailPage = ({house, refProp}) => {

    const windowSize = useWindowSize();

    return (
        <div className="house-detail-page-content">
        {windowSize.width > 769 &&
            <div className="bg-for-large-screens" ref={windowSize.width > 769 ? refProp : null}>
                <section className="house-features-section">
                    <div className="house-feature" id="house-feature-left">
                        <p>Dispozice domu</p>
                        <p>{house.disposition}</p>
                    </div>
                    <div className="house-feature" id="house-feature-middle">
                        <p>{"Rozloha " + house.floor_area}</p>
                        <p>{house.lot_area + " se zahrádkou"}</p>
                    </div>
                    <div className="house-feature" id="house-feature-right">
                        <p>Cena</p>
                        <p>{house.price}</p>
                    </div>
                </section>
            </div>
        }
            <GridInfoSection house={house} refProp={refProp} />
            <section className="virtual-guide-and-video-section" >
            {house.virtual_tour.length !== 0 ?
                <div className="virtual-guide-article-wrapper">
                    <h1>Virtuální prohlídka</h1>
                    <div className="virtual-guide-article-content">
                        <div className="house-virtual-guide-container">
                            <iframe name="I1" id="if1" width="100%" height="100%" style={{position: 'absolute'}} src={house.virtual_tour}></iframe>
                        </div>
                    </div>
                </div>
                : <></>
            }
            {house.video.length !== 0 ?
                <div className="video-article-wrapper">
                    <h1>Video</h1>
                    <div className="house-virtual-guide-container">
                        <iframe name="I1" id="if1" width="100%" height="100%" style={{position: 'absolute'}} src={house.video}></iframe>
                    </div>
                </div>
                : <></>
            }

            </section>
            {(house.exterier_images.length && house.interier_images.length && house.ground_plan_images.length) !== 0 &&
            <section className="house-detail-gallery-section">
                <h2 className="house-detail-gallery-title">Půdorysy</h2>
                <div className="ground-plan-gallery">
                    {house.ground_plan_images.map((img, idx) => {
                        const source = process.env.REACT_APP_BACKEND_SERVER + img;
                        return <img src={source} alt={"Půdorys obrázek " + idx}></img>
                    })}
                </div>
                <h2 className="house-detail-gallery-title">Interiér</h2>
                <ImageGallery images={house.interier_images}/>
                <h2 className="house-detail-gallery-title">Exteriér</h2>
                <ImageGallery images={house.exterier_images}/>
            </section>}
            <FormSection />
        </div>
    );
}

export default HouseDetailPage;