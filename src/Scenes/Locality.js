import React, { useContext } from 'react';
import LocalityPage from '../Components/pages/LocalityPage/LocalityPage';
import BackendDataContext from '../Context/BackendDataContext';

/*SASS*/
import './scenes.scss';

const Locality = () => {
    const { currentState } = useContext(BackendDataContext);
    const page = currentState.pages.find((page) => page.id === 3) || { sections: [{ content: '' }] };

    return(
        <div className="page-container">
            <div className="heading-wrapper">
                <h1 className="page-title">
                    Lokalita
                </h1>
                <div className="border-helper"></div>
            </div>
            <div className="page-content">
                <LocalityPage page={page} />
            </div>
        </div>
    );
}

export default Locality;