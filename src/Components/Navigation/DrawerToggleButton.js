import React, {useContext} from "react"
/* IMAGES & ICONS */
import menu from '../../assets/menu.svg'
/* OWN */
import {DrawerContext} from '../../Context/DrawerContext';
/* SASS */
import './Navigation.scss';


const DrawerToggleButton = () => {

    const {drawerState, toggleDrawer} = useContext(DrawerContext);

    return <DrawerContext.Consumer>
        {(value) => {
            if (!drawerState) {
                return (
                    <div className="drawer-toggle-button" onClick={() => toggleDrawer(!drawerState)} >
                        <img src={menu} alt="Menu" height="36px" />
                    </div>
                )
            } else {
                return <></>
            }
            
        }}
    </DrawerContext.Consumer>
};

export default DrawerToggleButton;