import React from 'react';

/*OWN*/
import FormSection from '../Components/pages/HomePage/sections/FormSection';
import ContactInfo from '../Components/pages/ContactPage/ContactInfo';

/*SASS*/
import './scenes.scss';

const Contact = () => {
    return(
        <div className="page-container">
            <div className="heading-wrapper">
                <h1 className="page-title">
                    Kontakt
                </h1>
                <div className="border-helper"></div>
            </div>
            <div className="page-content">
                <ContactInfo />
                <FormSection />
            </div>
        </div>
    );
}

export default Contact;