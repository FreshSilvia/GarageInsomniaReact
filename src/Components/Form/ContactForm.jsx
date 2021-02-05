import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';

function ContactForm() {
    const { handleChange , values, handleSubmit, errors } = useForm(validate);

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-header">Contact Us!!!</h1>
                <div className="form-inputs">
                    <label htmlFor="name" className='form-label'>
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Your name here"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="errors">{errors.name}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className='form-label'>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Your email here"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="errors">{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="address" className='form-label'>
                        Address
                    </label>
                    <input
                        type="address"
                        name="address"
                        className="form-input"
                        placeholder="Your address here"
                        value={values.address}
                        onChange={handleChange}
                    />
                    {errors.address && <p className="errors">{errors.address}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="phone number" className='form-label'>
                        Phone Number
                    </label>
                    <input
                        type="phoneNumber"
                        name="phoneNumber"
                        className="form-input"
                        placeholder="Your Phone Number here"
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p className="errors">{errors.phoneNumber}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="message" className='form-label'>
                        Comments
                    </label>
                    <textarea
                        type="message"
                        name="message"
                        className="text-input"
                        placeholder="Message us..."
                        // style="height:200px"
                    />
                    <button className="form-input-btn" type="submit">
                        Floor It!
                    </button>
                </div>
            </form>
    </div>
    )
}

export default ContactForm;