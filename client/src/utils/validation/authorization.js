import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import styles from '../../components/ReduxForms/ReduxForm.module.sass';

const validateEmail = (value) => {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(value);
};
const validatePassword = (value) => {
    const regexp = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/;
    return regexp.test(value);
};
const validateLogin = (value) => {
    if(value) {
        return value.length > 0;
    }
    return false;
};

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

export const renderTextField = ({
                                    input,
                                    label,
                                    placeholder,
                                    type,
                                    meta: {touched, error}
                                }) => (
    <div>
        <label htmlFor="name">{label}</label>
        {<input {...input} placeholder={placeholder} type={type} />}
        {touched && ((error && <div><i className="fas fa-exclamation-circle"/><span>{error}</span></div>))}
    </div>
);