import React, { useState } from 'react';
/* OWN */
import useForm from './FormFuncionality/useForm';
import validate from './FormFuncionality/validateInfo';

/* Sass */
import './Form.scss';


const Form = ({submitForm}) => {
    
    const { handleChange, handleSubmit, handleCheck, formData, errors } = useForm(submitForm, validate);   

    return (
            <form onSubmit={handleSubmit} noValidate>

                <h2 className="form-title">
                    Zaujal Vás náš projekt?<br/>
                    Ozvěte se nám.
                </h2>

                <div className="input-container">
                    <label htmlFor="name" className="label non-selectable">Jméno a příjmení*</label>
                    <input className="input-text" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                    {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="input-container">
                    <label htmlFor="phone" className="label non-selectable">Telefon*</label>
                    <input className="input-text" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>
                <div className="input-container">
                    <label htmlFor="email" className="label non-selectable">Email*</label>
                    <input className="input-text" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
                <div className="input-container">
                    <label htmlFor="mssg" className="label non-selectable">Text zprávy*</label>
                    <textarea className="input-text" id="mssg" name="mssg" value={formData.mssg} onChange={handleChange} />
                    {errors.mssg && <span className="error-msg" id="text-area-error">{errors.mssg}</span>}
                </div>                      
                <div className="check-button-container">
                    <div className="checkbox-container">
                        <input type="checkbox" className="clickable" id="check" name="check" checked={formData.check} onChange={handleCheck}/>
                        <label htmlFor="check" className="clickable label non-selectable">Souhlasím se zpracováním osobních údajů.</label>
                        {errors.check && <span className="error-msg" id="check-error">{errors.check}</span>}
                    </div>
                    <button className="yellow-button clickable non-selectable" type="submit" onClick={e => window.fbq('track', 'Lead')} >Odeslat</button>
                </div>
                                        
            </form>
    )
}

export default Form;