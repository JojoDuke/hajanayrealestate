import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
/* OWN */
import { useWindowSize } from '../../Utils/useWindowSize';
import NavigationItems from './NavigationItems';
import DrawerToggleButton from './DrawerToggleButton';
import logo from '../../assets/logo_hajany.png'
/* SASS */
import './Navigation.scss';

const NavigationBar = (props) => {

    /**
     * On mobile devices showing DrawerToggleButton
     */
    const windowSize = useWindowSize();
    const location = useLocation();
    const history = useHistory();

    return (
        <header>
            <div className={(location.pathname === '/' || /^\/detail-domu\/{1}\d/.test(location.pathname)) ? "header-content" : "header-content not-home"}>
                {(location.pathname === '/' || /^\/detail-domu\/{1}\d/.test(location.pathname)) &&
                    <div className="logo-wrapper" onClick={() => history.push('/')}>
                        <img src={logo} alt="Moderní Hajany logo" className="logo" />
                    </div>
                }
                <nav className="navigation">
                    {windowSize.width >= 993 ? <NavigationItems /> : <DrawerToggleButton />}
                </nav>
            </div>
        </header>
    );
};

export default NavigationBar;