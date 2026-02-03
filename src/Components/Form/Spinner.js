import React from 'react';
/* Sass */
import './FormSuccess.scss';


const Spinner = (props) => {
    
    const {checked, fail} = props;
    
    return (
        <div className={checked ? "spinner checked" : "spinner"}>
            {(checked && !fail) ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
  <polyline class="path check" fill="none" stroke="#000" stroke-width="13" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
</svg> :
            checked ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <line class="path line" fill="none" stroke="#000" stroke-width="12" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
            <line class="path line" fill="none" stroke="#000" stroke-width="12" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
            </svg> : null}
        </div>
    );
}

export default Spinner;