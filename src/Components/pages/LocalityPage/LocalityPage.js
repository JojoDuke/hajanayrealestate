import React, { useContext } from 'react';

/*OWN*/
/*import MapContainer from './MapComponent';*/
import map from '../../../assets/img/locality_map.jpg';
import { useWindowSize } from '../../../Utils/useWindowSize';
import car from '../../../assets/img/icons/car.svg';
import trees from '../../../assets/img/icons/trees.svg';
import house from '../../../assets/img/icons/house.png';
import BackendDataContext from '../../../Context/BackendDataContext';

/*SASS*/
import './LocalityPage.scss';
import TextEditorText from '../../TextEditorText/TextEditorText';


const LocalityPage = () => {

    const { currentState } = useContext(BackendDataContext);
    const page = currentState.pages.find((page) => page.id === 3);

    const windowSize = useWindowSize();

    const hajanyLocalityContent = {
        blocks: [
            { key: "l1", text: "Hajany jsou bezpečnou a příjemnou obcí, kde jsme již dříve postavili a úspěšně prodali 50 rodinných domů. Díky tomu zde vyrostla silná komunita mladých rodin, které si užívají klidné prostředí, přátelské sousedské vztahy a komfort moderního bydlení.", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "l2", text: "Představte si místo, kde se spojuje pohodlí moderního domova s kouzlem jihomoravské přírody. Hajany, malebná obec v okrese Brno-venkov, nabízejí ideální kombinaci klidu, soukromí a skvělé dostupnosti do Brna.", type: "unstyled", depth: 0, inlineStyleRanges: [{ offset: 36, length: 55, style: "BOLD" }, { offset: 163, length: 44, style: "BOLD" }], entityRanges: [], data: {} },
            { key: "l3", text: "Vše, co potřebujete pro pohodlný život, najdete přímo v obci – soukromou mateřskou školku, obecní úřad, sportovní i dětská hřiště, restauraci, sokolovnu a obchod. Hajany jsou místem, kde si můžete užívat soukromí a pohodu venkovského života, aniž byste se museli vzdát výhod města.", type: "unstyled", depth: 0, inlineStyleRanges: [{ offset: 163, length: 118, style: "BOLD" }], entityRanges: [], data: {} }
        ],
        entityMap: {}
    };

    return (
        <>
            {page &&
                <section className="locality-page-container">
                    <div className="locality-description-wrapper">
                        <TextEditorText data={hajanyLocalityContent}></TextEditorText>
                        {windowSize.width > 769 &&

                            <div className="map-image-container">
                                <a href="https://www.google.com/maps/place/664+43+Hajany/" target="_blank" rel="noreferrer">
                                    <img src={map} alt="Mapa okolí Hajany" loading="lazy"></img>
                                </a>
                            </div>
                        }
                    </div>
                    <div className="locality-features-wrapper">
                        <h2>Čím si vás Hajany získají</h2>
                        <div className="locality-features-content">
                            <div className="locality-features-individual car-features">
                                <div className="feature-img-container">
                                    <img src={car} alt="ikona auta"></img>
                                </div>
                                <ul className="bullet-list">
                                    <li className="bullet-feature">bydlení vzdálené 15 minut od centra Brna </li>
                                    <li className="bullet-feature">8 minut vzdálené obchodní a zábavní centrum OC Olympia</li>
                                    <li className="bullet-feature">dopravní dostupnost</li>
                                </ul>
                            </div>
                            <div className="locality-features-individual trees-features">
                                <div className="feature-img-container">
                                    <img src={trees} alt="ikona stromů"></img>
                                </div>
                                <ul className="bullet-list">
                                    <li className="bullet-feature">výhody města s vlastní zahradou</li>
                                    <li className="bullet-feature">malebná příroda a relaxace</li>
                                </ul>
                            </div>
                            <div className="locality-features-individual house-features">
                                <div className="feature-img-container">
                                    <img src={house} alt="ikona domu"></img>
                                </div>
                                <ul className="bullet-list">
                                    <li className="bullet-feature">dobrá občanská vybavenost</li>
                                    <li className="bullet-feature">soukromá mateřská školka</li>
                                    <li className="bullet-feature">sportovní vyžití</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {windowSize.width <= 769 &&
                        <a href="https://www.google.com/maps/place/664+43+Hajany/" target="_blank" rel="noreferrer">
                            <div className="map-image-container-bottom">
                            </div>
                        </a>
                    }
                </section>}
        </>
    );
}

export default LocalityPage;