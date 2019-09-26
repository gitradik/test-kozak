import React, { Component } from 'react';
import styles from './FormButton.module.sass';
import PropTypes from 'prop-types';

class FormButton extends Component {
    render() {
        const {content, isDisabled} = this.props;
        return (
            <button onClick={this.props.onClick} className={styles.formButton} disabled={isDisabled}>
                {content}
            </button>
        );
    }
}

FormButton.propTypes = {
    content: PropTypes.string,
    link: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default FormButton;

