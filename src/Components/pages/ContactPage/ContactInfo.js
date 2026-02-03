import React from 'react';

/*SASS*/
import './ContactInfo.scss'; 

const ContactInfo = () => {
    return (
        <section className="info-section">
            <h2>Máte dotaz? Neváhejte nás kontaktovat</h2>
            <div className="info-container">
                <div className="left-column">
                    <p>
                        <strong>Real major s.r.o.</strong><br/>
                        Hajany 222<br/>
                        664 43 Hajany
                    </p>
                    <p>
                        +420 776 387 387<br/>
                        info@realmajor.cz
                    </p>
                    <p>
                        IČO: 27723976<br/>
                        DIČ: CZ27723976
                    </p>
                </div>
                <div className="right-column">
                    <p>
                        <strong>Eva Boráková</strong><br/>
                        Makléř<br/>
                        +420 605 018 056<br/>
                    </p>
                    <p>
                        <strong>Jaroslav Borák</strong><br/>
                        Jednatel<br/>
                        +420 776 387 287<br/>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;