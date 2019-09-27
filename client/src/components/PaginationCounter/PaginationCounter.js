import React, { Component } from 'react';
import styles from './PaginationCounter.module.sass';
import PropTypes from 'prop-types';

class PaginationCounter extends Component {

    render() {
        const {page, maxPage} = this.props;
        return (
           <div className={styles.paginationCounter}>
               <span>{ page }/{ maxPage }</span>
           </div>
        );
    }
}

PaginationCounter.propTypes = {
    page: PropTypes.number,
    maxPage: PropTypes.number
};

PaginationCounter.defaultProps = {
    page: 1,
    maxPage: 1
};

export default PaginationCounter;

