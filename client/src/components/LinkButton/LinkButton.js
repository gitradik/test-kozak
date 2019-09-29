import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styles from './LinkButton.module.sass';
import PropTypes from 'prop-types';

class LinkButton extends Component {
    render() {
        const {content, link, className} = this.props;
        return (
            <Link className={[styles.entryButton, className].join(' ')} to={link}>
                {content}
            </Link>
        );
    }
}

LinkButton.propTypes = {
    content: PropTypes.string,
    link: PropTypes.string,
    className: PropTypes.string,
};

LinkButton.defaultProps = {
    content: "",
    link: "*",
    className: "",
};

export default LinkButton;

