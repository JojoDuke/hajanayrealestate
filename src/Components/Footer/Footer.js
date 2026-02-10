import React from 'react';
import { useHistory, Link } from 'react-router-dom';

/*OWN*/
import logo from '../../assets/logo_hajany.png';
import stavbykrocaLogo from '../../assets/stavbykroca_logo.svg';
import realmajorLogo from '../../assets/realmajor_logo.svg';

/*SASS*/
import './Footer.scss';

const Footer = () => {
    const history = useHistory();

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo-hajany-container" onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
                    <img className="footer-logo-img" src={logo} alt="Moderní Hajany logo" />
                </div>
                <div className="footer-logos-container">
                    <div className="footer-logos-inner">
                        <a href="https://www.realmajor.cz/" target="_blank">
                            <img src={realmajorLogo} alt="Real Major logo"></img>
                        </a>
                        <img src={stavbykrocaLogo} alt="Stavby Kroča logo"></img>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-content-inner">
                        <p className="address">
                            Realmajor s.r.o.<br />
                            Hajany 222<br />
                            664 43 Hajany
                        </p>
                        <p>
                            +420 776 387 287<br />
                            info@realmajor.cz
                        </p>
                    </div>
                    <div className="footer-legal-links">
                        <Link to="/aktuality#aml">AML</Link>
                        <Link to="/aktuality#gdpr">GDPR</Link>
                        <Link to="/aktuality#building-docs">Poučení o stavební dokumentaci</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;