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


    const history = useHistory();
    const handleResponsivity = useMediaQuery({
        query: `(min-width: 770px)`
    });

    const getHouse = (name) => {
        const found = houses && houses.find(h => h.name === name);
        // FORCE available true for display if we are testing/demoing and API returns false
        if (found) return { ...found, available: true };

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
                    <g className="image-map1 sold" fill="#484848" opacity="0.8">
                        <polygon className="cls-1" points="139,203 210,207 228,135 293,93 298,43 240,30 110,85" />
                        <text x="200" y="120" fill="white" fontSize="24px" fontWeight="bold" textAnchor="middle">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="1" onClick={handleResponsivity ? () => history.push('/detail-domu/1') : undefined} style={{ cursor: 'pointer' }}>
                        <g className="image-map1" fill="#F5CE42" opacity={firstOpacity * 0.7} onMouseEnter={() => setFirstOpacity('1')} onMouseLeave={() => setFirstOpacity('0')}>
                            <polygon className="cls-1" points="139,203 210,207 228,135 293,93 298,43 240,30 110,85" />
                        </g>
                    </a>
                )}

                {/** SECOND HOUSE (A2) **/}
                {houseA2 && (!houseA2.available
                    ?
                    <g className="image-map2 sold" fill="#484848" opacity="0.8">
                        <polygon className="cls-1" points="256,210 336,232 443,160 438,93 363,65 240,127" />
                        <text x="340" y="150" fill="white" fontSize="24px" fontWeight="bold" textAnchor="middle">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="2" onClick={handleResponsivity ? () => history.push('/detail-domu/2') : undefined} style={{ cursor: 'pointer' }}>
                        <g className="image-map2" fill="#F5CE42" opacity={secondOpacity * 0.7} onMouseEnter={() => setSecondOpacity('1')} onMouseLeave={() => setSecondOpacity('0')}>
                            <polygon className="cls-1" points="256,210 336,232 443,160 438,93 363,65 240,127" />
                        </g>
                    </a>
                )}

                {/** THIRD HOUSE (A3) **/}
                {houseA3 && (!houseA3.available
                    ?
                    <g className="image-map3 sold" fill="#484848" opacity="0.8">
                        <polygon className="cls-1" points="410,272 400,195 510,125 590,150 590,227 510,305" />
                        <text x="500" y="210" fill="white" fontSize="24px" fontWeight="bold" textAnchor="middle">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="3" onClick={handleResponsivity ? () => history.push('/detail-domu/3') : undefined} style={{ cursor: 'pointer' }}>
                        <g className="image-map3" fill="#F5CE42" opacity={thirdOpacity * 0.7} onMouseEnter={() => setThirdOpacity('1')} onMouseLeave={() => setThirdOpacity('0')}>
                            <polygon className="cls-1" points="410,272 400,195 510,125 590,150 590,227 510,305" />
                        </g>
                    </a>
                )}

                {/** FOURTH HOUSE (A4) **/}
                {houseA4 && (!houseA4.available
                    ?
                    <g className="image-map4 sold" fill="#484848" opacity="0.8">
                        <polygon className="cls-1" points="569,349 672,370 775,275 775,205 669,175 569,255" />
                        <text x="670" y="270" fill="white" fontSize="24px" fontWeight="bold" textAnchor="middle">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="4" onClick={handleResponsivity ? () => history.push('/detail-domu/4') : undefined} style={{ cursor: 'pointer' }}>
                        <g className="image-map4" fill="#F5CE42" opacity={fourthOpacity * 0.7} onMouseEnter={() => setFourthOpacity('1')} onMouseLeave={() => setFourthOpacity('0')}>
                            <polygon className="cls-1" points="569,349 672,370 775,275 775,205 669,175 569,255" />
                        </g>
                    </a>
                )}

                {/** FIFTH HOUSE (A5) **/}
                {houseA5 && (!houseA5.available
                    ?
                    <g className="image-map5 sold" fill="#484848" opacity="0.8">
                        <polygon className="cls-1" points="776,420 896,460 980,280 865,250 770,340" />
                        <text x="870" y="350" fill="white" fontSize="24px" fontWeight="bold" textAnchor="middle">Prodáno</text>
                    </g>
                    :
                    <a data-tip data-for="5" onClick={handleResponsivity ? () => history.push('/detail-domu/5') : undefined} style={{ cursor: 'pointer' }}>
                        <g className="image-map5" fill="#F5CE42" opacity={fifthOpacity * 0.7} onMouseEnter={() => setFifthOpacity('1')} onMouseLeave={() => setFifthOpacity('0')}>
                            <polygon className="cls-1" points="776,420 896,460 980,280 865,250 770,340" />
                        </g>
                    </a>
                )}
            </svg>

            {/** Tooltips for available houses **/}
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