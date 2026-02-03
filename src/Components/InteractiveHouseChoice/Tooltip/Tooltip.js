import React from 'react';
import ReactTooltip from 'react-tooltip';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {useMediaQuery} from 'react-responsive';
import { NavLink } from 'react-router-dom';
/* Containers, Components and Utils */

/* Images and Icons */

/* Styles */
import './Tooltip.scss';

const ButtonComponent = (props) => {
    const { children } = props;

    return (
        <button style={{padding: '8px 16px', transitionDuration: '0s', marginTop: '8px'}} className="yellow-button">{children}</button>
    );
}


const Tooltip = (props) => {

    return (<ReactTooltip
        id={props.id}
        effect="solid"
        className="tooltip"
        delayHide={70}
        delayShow={40}
        arrowColor="transparent"
        place="bottom"
        //offset={{right: 100, top: 50}}
    >
        <div onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} className="tooltip-content">
            <h1>{props.houseNum}</h1>
            <div className="info-grid">
                <div id="disposition"><p>{props.disposition}</p></div>
                <div id="floor-area-icon"></div>
                <div id="floor-area"><p>{props.floorArea}</p></div>
                <div id="lot-area-icon"></div>
                <div id="lot-area"><p>{props.lotArea}</p></div>
                <div id="price"><p>{props.price}</p></div>
            </div>
            <NavLink to={"/detail-domu/" + props.id} exact>
                <ButtonComponent>Více informací</ButtonComponent>
            </NavLink>
        </div>
    </ReactTooltip>);
}

export default Tooltip;