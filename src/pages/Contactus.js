import React, { useEffect } from 'react';
import '../css/main.css';
import ContactForm from '../Components/Form/ContactForm';

const Contactus = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ContactForm/>
        </>
    )
}

export default Contactus;