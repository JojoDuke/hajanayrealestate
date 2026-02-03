import React, { useState } from 'react';
import axios from 'axios';

/*OWN*/
import Form from '../../../Form/Form';
import FormSuccess from '../../../Form/FormSuccess';

/*SASS*/
import './FormSection.scss';

const FormSection = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const submitForm = (formData) => {
        setIsSubmitted(true);
        setIsLoading(true);
        
        axios.post(process.env.REACT_APP_BACKEND_SERVER + '/submit-form', {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            message: formData.mssg,
        }).then(res => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
            setTimeout(() => {
                setIsSubmitted(false); 
            }, 12000);
        }).catch(err => {
            setTimeout(() => {
                setIsError(true);
                setIsLoading(false);
            }, 2000);
        })
    }

    return (
        <section className="form-section">
            <div className="form-wrapper">
                {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess loading={isLoading} fail={isError}/>}
            </div>
        </section>
    );
}

export default FormSection;