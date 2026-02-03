import React, { useState, createContext } from "react";

export const DrawerContext = createContext();

const DrawerProvider = ({children}) => {

    const [drawerState, toggleDrawer] = useState(false);

    return <DrawerContext.Provider
        value={{drawerState, toggleDrawer}}>
        {children}
    </DrawerContext.Provider>
};

export default DrawerProvider;