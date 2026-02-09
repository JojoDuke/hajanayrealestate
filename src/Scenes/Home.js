import React, { useRef, useContext } from 'react';

/*OWN*/
import './Home.scss';
import scrollDownButton from '../assets/scrollDownArrow.svg';
import heroImage from '../assets/hero_hajany_main.jpg';
import GridSection from '../Components/pages/HomePage/sections/GridSection';
import InteractiveImgSection from '../Components/pages/HomePage/sections/InteractiveImgSection';
import FormSection from '../Components/pages/HomePage/sections/FormSection';
import BackendDataContext from '../Context/BackendDataContext';



const Home = () => {

    const scrollToRef = (ref) => window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: 'smooth' })
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    const { currentState } = useContext(BackendDataContext);
    const pages = [...currentState.pages];
    const page = pages.find((page) => page.id === 1) || { sections: [] };

    return (
        <>
            <div className="page-container">
                <div className="hero-video-bg-container">
                    <div id="relative-container">
                        <div className="hero-bg-cover"></div>
                        <img src={heroImage} id="vid" alt="Hero background" />
                    </div>
                </div>
                <div className="hero-content">
                    <div className="title-scroll-container">
                        <img src={scrollDownButton} alt="Tlačítko posunout dolů" onClick={executeScroll} />
                    </div>
                </div>
                <GridSection refProp={myRef} page={page} />
                <InteractiveImgSection />
                <FormSection />
            </div>
        </>
    );
}

export default Home;