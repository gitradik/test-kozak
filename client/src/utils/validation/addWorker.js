import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const validate = values => {
    const errors = {};
    if (!values.fullName) {
        errors.fullName = 'This field is required';
    }
    if (!values.phone) {
        errors.phone = 'This field is required';
    }
    if(!values.sex) {
        errors.sex = 'This field is required';
    }
    if(!values.salary) {
        errors.salary = 'This field is required';
    }
    if(!values.position) {
        errors.position = 'This field is required';
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