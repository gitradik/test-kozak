import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styles from './EntryButton.module.sass';
import PropTypes from 'prop-types';

class EntryButton extends Component {
    render() {
        const {content, link} = this.props;
        return (
            <Link className={styles.entryButton} to={link}>
                {content}
            </Link>
        );
    }
}

EntryButton.propTypes = {
    content: PropTypes.string,
    link: PropTypes.string,
};

export default EntryButton;

