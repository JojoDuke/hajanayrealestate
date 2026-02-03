import React from 'react';
/* OWN */
import Spinner from './Spinner';
/* Sass */
import './FormSuccess.scss';


const FormSuccess = (props) => {
    
    let formSuccess = <Spinner checked={false}/>
    if (!props.loading) {
        formSuccess = <div className="items-container">
                        {props.fail ? 
                        <> <Spinner checked={true} fail={true}/>
                            <h2>Nepodařilo se nám odeslat vaši zprávu, zkuste to prosím za chvíli znovu.</h2>
                        </> : <>
                        <Spinner checked={true} fail={false}/>
                        <h2>Děkujeme za zprávu!</h2>
                        </>}
                    </div>
    }
    
    return (
        <div className="form-success">
            {formSuccess}
        </div>
    )
}

export default FormSuccess;