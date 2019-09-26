import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { validateLogin, validatePassword, validateEmail } from './regexp';

export const validate = values => {
    const errors = {};
    if (!validateLogin(values.login)) {
        errors.login = 'This field is required';
    }
    if (!validateEmail(values.email)) {
        errors.email = 'This field is required';
    }
    if(!validatePassword(values.password)) {
        errors.password = 'This field is required';
    }
    return errors;
};

export const renderTextField = ({ input, label, placeholder, type, meta: {touched, error } }) => (
    <div>
        <label htmlFor="name">{label}</label>
        <input {...input} placeholder={placeholder} type={type} />
        {touched && (error && <div><i className="fas fa-exclamation-circle"/><span>{error}</span></div>)}
    </div>
);