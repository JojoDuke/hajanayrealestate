const validateInfo = (formData) => {
    let errors = {}

    if (!formData.name) {
        errors.name = "Zadejte jméno a příjmení"
    }

    if (!formData.mssg) {
        errors.mssg = "Zadejte text zprávy"
    }
    
    if (!formData.email) {
        errors.email = "Zadejte email"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Špatný formát emailové adresy"
    }

    if (!formData.phone) {
        errors.phone = "Zadejte telefonní číslo"
    } else if((!/^\+?[\d]{3}[1-9][0-9]{8}$/.test(formData.phone.replace(/\s+/g, '')))
                && (!/^[0-9]{9}$/.test(formData.phone.replace(/\s+/g, '')))) {
        errors.phone = "Špatný formát telefonního čísla"
    }

    if (!formData.check) {
        errors.check = "Musíte souhlasit se zpracováním osobních údajů"
    }

    return errors;
}

export default validateInfo