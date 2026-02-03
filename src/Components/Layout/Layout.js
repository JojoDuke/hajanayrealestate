import React from 'react';
/* OWN */
import NavigationBar from '../Navigation/NavigationBar';
import Footer from '../Footer/Footer';


const Layout = (props) => {

    const { children } = props; 
    
    return (
        <div className="page" style={{position: 'relative', minHeight: '100vh', display: 'flex', flexDirection:'column'}}>
            <NavigationBar />
            <main style={{display: 'block', flex: '1 0 auto'}}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;