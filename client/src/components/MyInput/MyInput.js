import React, { Component } from 'react';
import styles from './MyInput.module.sass';
import PropTypes from 'prop-types';

class MyInput extends Component {

    render() {
        const {title, errorMessage, placeholder} = this.props;
        return (
            <div className={styles.myInputBox}>
                <span className={styles.myInputTitle}>{title}</span>
                <span className={styles.myInputError}>{errorMessage}</span>
                <input className={styles.myInput} placeholder={placeholder}/>
            </div>
        );
    }
}

MyInput.propTypes = {
    title: PropTypes.string,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
};

MyInput.defaultProps = {
    title: "",
    errorMessage: "error",
    placeholder: ""
};

export default MyInput;

