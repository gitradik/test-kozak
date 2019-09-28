import React from 'react';
import styles from './WorkerChangeButton.module.sass';
import PropTypes from 'prop-types';

class WorkerChangeButton extends React.Component {
    render() {
        return (
            <button onClick={ this.props.onClick } className={styles.workerChangeButton}>
                <i className={ this.props.classIcon }/>{ this.props.content }
            </button>
        );
    }
}

WorkerChangeButton.propTypes = {
    content: PropTypes.string,
    onClick: PropTypes.func,
    classIcon: PropTypes.string,
};

export default WorkerChangeButton;