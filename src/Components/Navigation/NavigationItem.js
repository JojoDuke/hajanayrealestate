import React from 'react';
import { NavLink } from 'react-router-dom';
/* OWN */
import {DrawerContext} from '../../Context/DrawerContext';
/* SASS */
import './Navigation.scss';

const NavigationItem = ( props ) => {

    const { toggleDrawer } = React.useContext(DrawerContext);
    const { item, children } = props;

    return(
    <li className="navigation-item">
        <NavLink to={item.link} exact={item.exact} onClick={() => toggleDrawer(false)}>
            {item.title}
        </NavLink>
    </li>);
};

export default NavigationItem;