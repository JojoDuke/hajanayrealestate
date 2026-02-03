import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        mssg: "",
        check: false
    });

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleCheck = (ev) => {
        const checked = ev.target.checked;
        
        setFormData(prevS => ({
            ...prevS,
            check: checked
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(formData));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(formData);
            setFormData({
                name: "",
                company: "",
                phone: "",
                email: "",
                mssg: "",
                file: null,
                check: false
            });
            setIsSubmitting(false);
        }
    }, [errors]
    );

    return { handleChange, handleSubmit, handleCheck, formData, errors };
};

export default useForm;