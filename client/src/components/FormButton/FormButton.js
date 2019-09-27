import React, { Component } from 'react';
import styles from './FormButton.module.sass';
import PropTypes from 'prop-types';

class FormButton extends Component {

    renderFontawesomeIcon = () => {
        const { fontawesomeIcon } = this.props;
        return fontawesomeIcon.length > 0 && <i className={fontawesomeIcon}/>;
    };

    render() {
        const {content, isDisabled, variant, className} = this.props;
        return (
            <button variant={variant} onClick={this.props.onClick} className={[styles.formButton, className, isDisabled && styles.disabled].join(' ')} disabled={isDisabled}>
                {this.renderFontawesomeIcon()}
               <span>{content}</span>
            </button>
        );
    }
}

FormButton.propTypes = {
    content: PropTypes.string,
    link: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    fontawesomeIcon: PropTypes.string,
    variant: PropTypes.string,
    className: PropTypes.string,
};

FormButton.defaultProps = {
    fontawesomeIcon: "",
    variant: "primary",
    className: "",
};

export default FormButton;

