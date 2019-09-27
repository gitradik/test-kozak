import React, {Component} from 'react';
import styles from './ListWorkers.module.sass';
import PropTypes from 'prop-types';

class ListWorkers extends Component {

    renderWorkers = () => {
        return this.props.workers.map((worker, i) => {
            const { fullName, phone, sex, salary, position, createAt } = [...worker];
            return (<li key={i}>
                <span>{ fullName }</span>
                <span>{ phone }</span>
                <span>{ sex }</span>
                <span>{ salary }</span>
                <span>{ position }</span>
                <span>{ createAt }</span>
            </li>);
        });
    };

    render() {
        return (
            <div className={styles.listWorkers}>
                <div className={styles.title}>{ this.props.title }</div>
                <ul>{ this.renderWorkers() }</ul>
            </div>
        );
    }
}

ListWorkers.propTypes = {
    title: PropTypes.string,
    workers: PropTypes.array,
};

ListWorkers.defaultProps = {
    title: "",
    workers: [],
};

export default ListWorkers;