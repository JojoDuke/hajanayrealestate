import React from 'react';

/*OWN*/
/*import MapContainer from './MapComponent';*/
import map from '../../../assets/img/locality_map.jpg';
import { useWindowSize } from '../../../Utils/useWindowSize';
import car from '../../../assets/img/icons/car.svg';
import trees from '../../../assets/img/icons/trees.svg';
import house from '../../../assets/img/icons/house.png';

/*SASS*/
import './LocalityPage.scss';
import TextEditorText from '../../TextEditorText/TextEditorText';


const LocalityPage = ({ page }) => {

    const windowSize = useWindowSize();

    // Fetch content from API, with hardcoded fallback
    const zelesiceLocalityContent = page && page.sections && page.sections[0] && page.sections[0].content
        ? JSON.parse(page.sections[0].content)
        : {
            blocks: [
                { key: "l1", text: "Želešice jsou obcí rozkládající se v blízkosti města Modřice v okrese Brno-venkov. Jedná se o obec, která svým občanům poskytuje klidné bydlení obklopené malebnou přírodou, kde můžete trávit volný čas s rodinou. V obci žije přibližně 1600 obyvatel. ", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
                { key: "l2", text: "Jednou z největších výhod obce je její dostupnost do Brna. Jen 8 minut od obce se nachází obchodní a zábavní centrum OC Olympia. V samotném centru Brna jste autem za 15 minut. Pro děti je obec vybavena dvěma mateřskými a dvěma základními školami, dále se zde nachází obecní úřad, pošta, fotbalové hřiště, dětské hřiště, restaurace, cukrárna, kostel. ", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
                { key: "l3", text: "O zábavu a sportovní vyžití je v Želešicích postaráno. Nachází se zde Kynologický klub, Myslivecký spolek a v neposlední řadě Vinařský spolek. Milovníky kol a pěších túr potěší cyklotrasy, které se v okolí nachází. Zavítat můžete například do přírodního parku Bobrava, vydat se po Brněnské vinařské stezce nebo provětrat kolo na cyklostezce s názvem Želešické KOLORÁDO.", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} }
            ],
            entityMap: {}
        };

    return (
        <>
            <section className="locality-page-container">
                <div className="locality-description-wrapper">
                    <TextEditorText data={zelesiceLocalityContent}></TextEditorText>
                    {windowSize.width > 769 &&

                        <div className="map-image-container">
                            <a href="https://www.google.com/maps/place/664+43+%C5%BDele%C5%A1ice/" target="_blank" rel="noreferrer">
                                <img src={map} alt="Mapa okolí Želešice" loading="lazy"></img>
                            </a>
                        </div>
                    }
                </div>
                <div className="locality-features-wrapper">
                    <h2>Čím si vás Želešice získají</h2>
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
                    <a href="https://www.google.com/maps/place/664+43+%C5%BDele%C5%A1ice/" target="_blank" rel="noreferrer">
                        <div className="map-image-container-bottom">
                        </div>
                    </a>
                }
            </section>
        </>
    );
}

export default LocalityPage;