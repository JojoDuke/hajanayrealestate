import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
/* Containers, Components and Utils */
import Tooltip from '../Tooltip/Tooltip';
/* Styles */
import './ImageMap.scss';


const ImageMap = ({ houses }) => {

    /**
     * If hover on tooltip the area should stay highlighted with opacity 0.7
     */
    const [firstOpacity, setFirstOpacity] = useState('0');
    const [secondOpacity, setSecondOpacity] = useState('0');
    const [thirdOpacity, setThirdOpacity] = useState('0');
    const [fourthOpacity, setFourthOpacity] = useState('0');
    const [fifthOpacity, setFifthOpacity] = useState('0');
    const [sixthOpacity, setSixthOpacity] = useState('0');
    const [seventhOpacity, setSeventhOpacity] = useState('0');
    const [eighthOpacity, setEighthOpacity] = useState('0');
    const [ninthOpacity, setNinthOpacity] = useState('0');
    const [tenthOpacity, setTenthOpacity] = useState('0');
    const [eleventhOpacity, setEleventhOpacity] = useState('0');
    const [twelthOpacity, setTwelthOpacity] = useState('0');
    const [thirteenthOpacity, setThirteenthOpacity] = useState('0');


    const history = useHistory();
    const handleResponsivity = useMediaQuery({
        query: `(min-width: 770px)`
    });

    const getHouse = (name) => {
        const found = houses && houses.find(h => h.name === name);
        if (found) return found;
        // Default mock if data missing
        return {
            id: name === 'A1' ? 1 : (name === 'A2' ? 2 : (name === 'A3' ? 3 : (name === 'A4' ? 4 : 5))),
            name,
            available: true,
            price: '12 000 000 Kč',
            disposition: '5+kk',
            floor_area: '200 m²',
            lot_area: '500 m²'
        };
    };

    const houseA1 = getHouse('A1');
    const houseA2 = getHouse('A2');
    const houseA3 = getHouse('A3');
    const houseA4 = getHouse('A4');
    const houseA5 = getHouse('A5');

    return (
        <div className="image-map">
            <svg className="image-map-content" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
                {/** FIRST HOUSE (A1) **/}
                {houseA1 && (!houseA1.available
                    ?
                    <g className="image-map1 sold" fill="#484848" opacity="0">
                        <polygon className="cls-1" points="98,263 178,287 283,213 278,143 203,118 88,178" />
                        <text x="185" y="200" fill="white" fontSize="20px" verticalAnchor="start">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="1" onClick={handleResponsivity ? () => history.push('/detail-domu/1') : undefined}>
                        <g className="image-map1" fill="#F5CE42" opacity={firstOpacity * 0.7} onMouseEnter={() => setFirstOpacity('1')} onMouseLeave={() => setFirstOpacity('0')}>
                            <polygon className="cls-1" points="139,203 210,207 228,135 293,93 298,43 240,30 110,85" />
                        </g>
                    </a>
                )}

                {/** SECOND HOUSE (A2) **/}
                {houseA2 && (!houseA2.available
                    ?
                    <g className="image-map2 sold" fill="#484848" opacity="0">
                        <polygon className="cls-1" points="366,476 447,474 485,468 483,406 468,387 453,365 373,374" />
                        <text x="420" y="420" fill="white" fontSize="20px" verticalAnchor="start">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="2" onClick={handleResponsivity ? () => history.push('/detail-domu/2') : undefined}>
                        <g className="image-map2" fill="#F5CE42" opacity={secondOpacity * 0.7} onMouseEnter={() => setSecondOpacity('1')} onMouseLeave={() => setSecondOpacity('0')}>
                            <polygon className="cls-1" points="256,210 336,232 443,160 438,93 363,65 240,127" />
                        </g>
                    </a>
                )}

                {/** THIRD HOUSE (A3) **/}
                {houseA3 && (!houseA3.available
                    ?
                    <g className="image-map3 sold" fill="#484848" opacity="0">
                        <polygon className="cls-1" points="526,462 598,460 635,454 635,397 616,379 595,357 521,367" />
                        <text x="575" y="410" fill="white" fontSize="20px" verticalAnchor="start">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="3" onClick={handleResponsivity ? () => history.push('/detail-domu/3') : undefined}>
                        <g className="image-map3" fill="#F5CE42" opacity={thirdOpacity * 0.7} onMouseEnter={() => setThirdOpacity('1')} onMouseLeave={() => setThirdOpacity('0')}>
                            <polygon className="cls-1" points="410,272 400,195 510,125 590,150 590,227 510,305" />
                        </g>
                    </a>
                )}

                {/** FOURTH HOUSE (A4) **/}
                {houseA4 && (!houseA4.available
                    ?
                    <g className="image-map4 sold" fill="#484848" opacity="0">
                        <polygon className="cls-1" points="569,349 672,370 775,275 775,205 669,175 569,255" />
                        <text x="710" y="395" fill="white" fontSize="20px" verticalAnchor="start">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="4" onClick={handleResponsivity ? () => history.push('/detail-domu/4') : undefined}>
                        <g className="image-map4" fill="#F5CE42" opacity={fourthOpacity * 0.7} onMouseEnter={() => setFourthOpacity('1')} onMouseLeave={() => setFourthOpacity('0')}>
                            <polygon className="cls-1" points="569,349 672,370 775,275 775,205 669,175 569,255" />
                        </g>
                    </a>
                )}

                {/** FIFTH HOUSE (A5) **/}
                {houseA5 && (!houseA5.available
                    ?
                    <g className="image-map5 sold" fill="#484848" opacity="0">
                        <polygon className="cls-1" points="776,420 896,460 980,280 865,250 770,340" />
                        <text x="640" y="260" fill="white" fontSize="20px" verticalAnchor="start">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="5" onClick={handleResponsivity ? () => history.push('/detail-domu/5') : undefined}>
                        <g className="image-map5" fill="#F5CE42" opacity={fifthOpacity * 0.7} onMouseEnter={() => setFifthOpacity('1')} onMouseLeave={() => setFifthOpacity('0')}>
                            <polygon className="cls-1" points="776,420 896,460 980,280 865,250 770,340" />
                        </g>
                    </a>
                )}
            </svg>

            {/** FIRST HOUSE (A1) **/}
            {houseA1 && houseA1.available && (houseA1.price || houses) &&
                <Tooltip
                    houseNum={houseA1.name.toString()}
                    id="1"
                    disposition={houseA1.disposition}
                    floorArea={houseA1.floor_area}
                    lotArea={houseA1.lot_area}
                    price={houseA1.price}
                    mouseEnter={() => setFirstOpacity('1')}
                    mouseLeave={() => setFirstOpacity('0')}
                />
            }

            {/** SECOND HOUSE (A2) **/}
            {houseA2 && houseA2.available && (houseA2.price || houses) &&
                <Tooltip
                    houseNum={houseA2.name.toString()}
                    id="2"
                    disposition={houseA2.disposition}
                    floorArea={houseA2.floor_area}
                    lotArea={houseA2.lot_area}
                    price={houseA2.price}
                    mouseEnter={() => setSecondOpacity('1')}
                    mouseLeave={() => setSecondOpacity('0')}
                />
            }

            {/** THIRD HOUSE (A3) **/}
            {houseA3 && houseA3.available && (houseA3.price || houses) &&
                <Tooltip
                    houseNum={houseA3.name.toString()}
                    id="3"
                    disposition={houseA3.disposition}
                    floorArea={houseA3.floor_area}
                    lotArea={houseA3.lot_area}
                    price={houseA3.price}
                    mouseEnter={() => setThirdOpacity('1')}
                    mouseLeave={() => setThirdOpacity('0')}
                />
            }

            {/** FOURTH HOUSE (A4) **/}
            {houseA4 && houseA4.available && (houseA4.price || houses) &&
                <Tooltip
                    houseNum={houseA4.name.toString()}
                    id="4"
                    disposition={houseA4.disposition}
                    floorArea={houseA4.floor_area}
                    lotArea={houseA4.lot_area}
                    price={houseA4.price}
                    mouseEnter={() => setFourthOpacity('1')}
                    mouseLeave={() => setFourthOpacity('0')}
                />
            }

            {/** FIFTH HOUSE (A5) **/}
            {houseA5 && houseA5.available && (houseA5.price || houses) &&
                <Tooltip
                    houseNum={houseA5.name.toString()}
                    id="5"
                    disposition={houseA5.disposition}
                    floorArea={houseA5.floor_area}
                    lotArea={houseA5.lot_area}
                    price={houseA5.price}
                    mouseEnter={() => setFifthOpacity('1')}
                    mouseLeave={() => setFifthOpacity('0')}
                />
            }
        </div>
    );
};

export default ImageMap;
