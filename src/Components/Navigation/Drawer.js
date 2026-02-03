import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
/* IMAGES & ICONS */
import close from '../../assets/close.svg';
/* OWN */
import {DrawerContext} from '../../Context/DrawerContext';
import {useWindowSize} from '../../Utils/useWindowSize';
import NavigationItems from './NavigationItems';
/*SASS*/
import './Navigation.scss';


const Drawer = (props) => {

    const {drawerState, toggleDrawer} = useContext(DrawerContext);
    const windowSize = useWindowSize();
    
    return (
        <>
            {windowSize.width <= 992 ?
                <div>
                    <div className="drawer-page-overlay" style={drawerState ? {opacity: 1, visibility: 'visible'} : {opacity: 0, visibility:'hidden'}} onClick={()=>toggleDrawer(false)} ></div>
                    <div className="drawer-wrapper" style={drawerState ? {right: "0"} : {right: "-100vw"}}>
                        <div className="drawer-inner">  
                            <img className="close-icon" src={close} alt="Zavřít" height="36px" onClick={() => {toggleDrawer(false);}} />
                            <NavigationItems/>
                        </div>
                    </div>
                </div>
                
                : null}
        </>
    );
}

export default Drawer;