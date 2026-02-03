import React from 'react';
import { useLocation } from 'react-router-dom';
/* OWN */
import NavigationItem from './NavigationItem';
import { useWindowSize } from '../../Utils/useWindowSize';
/* CONFIG*/
import { navigationItems } from '../../Config/navigationItems';
/* SASS */
import './Navigation.scss';

const NavigationItems = () => {

    const location = useLocation();
    const windowSize = useWindowSize();

    return (
        <ul className={windowSize.width > 992 ? "navigation-items" : "navigation-items nav-items-drawer"}>

            {navigationItems.map((item, index) => {
                return (<NavigationItem key={index} item={item} />);
            })}
        </ul>
    );
}

export default NavigationItems;