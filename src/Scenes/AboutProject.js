import React, { useContext } from 'react';
import AboutProjectPage from '../Components/pages/AboutProjectPage/AboutProjectPage';
import BackendDataContext from '../Context/BackendDataContext';

const AboutProject = () => {

    const { currentState } = useContext(BackendDataContext);
    const page = currentState.pages.find((page)=>page.id === 2);


    return(
        <>
        {page &&
        <div className="page-container">
            <div className="heading-wrapper">
                <h1 className="page-title">
                    O&nbsp;projektu
                </h1>
                <div className="border-helper"></div>
            </div>
            <div className="page-content">
                <AboutProjectPage page={page}/>
            </div>
        </div>}
        </>
    );
}

export default AboutProject;