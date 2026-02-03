import React from 'react';
import HouseDetailPage from '../HouseDetailPage';
import downloadIcon from '../../../../assets/img/icons/download_arrow.svg';
import { useWindowSize } from '../../../../Utils/useWindowSize';

/*SASS*/
import './GridInfoSection.scss';
import TextEditorText from '../../../TextEditorText/TextEditorText';


const GridInfoSection = ({ house, refProp }) => {

    const windowSize = useWindowSize();

    return (
        <section className="grid-info-section" ref={windowSize.width <= 769 ? refProp : null}>
            <div className="house-locality-description-container border-bottom border-right">
                {/*<h1 className="house-grid-article-title">Návrší 5</h1>*/}
                <TextEditorText data={JSON.parse(house.locality)}></TextEditorText>
            </div>
            <div className="house-info-table-container border-top border-right">
                <h1 className="house-grid-article-title">Vlastnosti rodinného domu</h1>
                <div className="house-info-table-row">
                    <p>Dostupnost</p>
                    <p>{house.available ? "K dispozici" : "Prodaný"}</p>
                </div>
                <div className="house-info-table-row">
                    <p>Dispozice</p>
                    <p>{house.disposition}</p>
                </div>
                <div className="house-info-table-row">
                    <p>Parcelní číslo</p>
                    <p>{house.parcel_number}</p>
                </div>
                <div className="house-info-table-row">
                    <p>Zastavěná plocha</p>
                    <p>{house.builtup_area}</p>
                </div>
                <div className="house-info-table-row">
                    <p>Užitná plocha</p>
                    <p>{house.floor_area}</p>
                </div>
                <div className="house-info-table-row">
                    <p>Plocha pozemku</p>
                    <p>{house.lot_area}</p>
                </div>
                <div className="house-info-table-row">
                    <p>Prodejní cena</p>
                    <p>{house.price}</p>
                </div>
            </div>
            <div className="house-files-table-container">
                <h1 className="house-grid-article-title">Technická dokumentace </h1>
                {house.situation_plan_file.length !== 0 &&
                    <a href={process.env.REACT_APP_BACKEND_SERVER + house.situation_plan_file} target="_blank">
                        <div className="house-info-table-row hoverable">
                            <p>Situační plán</p>
                            <img src={downloadIcon} alt="ikona ke stažení"></img>
                        </div>
                    </a>
                }
                {house.situation_file.length !== 0 &&
                <a href={process.env.REACT_APP_BACKEND_SERVER + house.situation_file} target="_blank">
                    <div className="house-info-table-row hoverable">
                        <p>Situace</p>
                        <img src={downloadIcon} alt="ikona ke stažení"></img>
                    </div>
                </a>
                }
                {house.intro_report_file.length !== 0 &&
                <a href={process.env.REACT_APP_BACKEND_SERVER + house.intro_report_file} target="_blank">
                    <div className="house-info-table-row hoverable">
                        <p>Průvodní zpráva</p>
                        <img src={downloadIcon} alt="ikona ke stažení"></img>
                    </div>
                </a>
                }
                {house.comprehensive_report_file.length !== 0 &&
                <a href={process.env.REACT_APP_BACKEND_SERVER + house.comprehensive_report_file} target="_blank">
                    <div className="house-info-table-row hoverable">
                        <p>Souhrnná zpráva</p>
                        <img src={downloadIcon} alt="ikona ke stažení"></img>
                    </div>
                </a>
                }
                {house.project_file.length !== 0 &&
                <a href={process.env.REACT_APP_BACKEND_SERVER + house.project_file} target="_blank">
                    <div className="house-info-table-row hoverable">
                        <p>Projekt</p>
                        <img src={downloadIcon} alt="ikona ke stažení"></img>
                    </div>
                </a>
                }
                {house.penb_file.length !== 0 &&
                <a href={process.env.REACT_APP_BACKEND_SERVER + house.penb_file} target="_blank">
                    <div className="house-info-table-row hoverable">
                        <p>PENB</p>
                        <img src={downloadIcon} alt="ikona ke stažení"></img>
                    </div>
                </a>
                }
            </div>
            <div className="house-disposition-description-container border-left">
                {/*<h1 className="house-grid-article-title">Dispozice</h1>*/}
                <TextEditorText data={JSON.parse(house.description)}></TextEditorText>
            </div>
            <div id="left-top-helper" className="border-bottom"></div>
            <div id="left-bottom-helper" className="border-top"></div>
            <div id="arrow-container">
                <div id="arrow-helper" className="border-top border-right"></div>
            </div>
            <div id="bottom-right-helper" className="border-bottom"></div>
            <div id="bottom-margin-helper" className="border-bottom border-left"></div>
            <div id="top-right-helper" className="border-bottom border-right"></div>
        </section>
    );
}

export default GridInfoSection;