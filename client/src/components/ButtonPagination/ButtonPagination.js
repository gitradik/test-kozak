import React from 'react';
import styles from './ButtonPagination.module.sass';
import PropTypes from 'prop-types';

class ButtonPagination extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className={styles.buttonPagination}>
                <i className={this.props.fontawesomeIcon}/>
                {this.props.content}
            </button>
        );
    }
}

ButtonPagination.propTypes = {
    onClick: PropTypes.func,
    content: PropTypes.string,
    fontawesomeIcon: PropTypes.string,
};

export default ButtonPagination;