import React, {Component} from 'react';
import styles from './ListWorkers.module.sass';
import PropTypes from 'prop-types';
import history from "../../utils/history";

class ListWorkers extends Component {
    renderWorkers() {
        const { workers } = this.props;
        const arrWorkers = [];
        for (let i = 0; i < workers.length; i++) {
            const {_id, fullName, phone, sex, salary, position, createAt} = workers[i];
            arrWorkers.push(
                <li key={i} onClick={() => history.push('/worker/' + _id)}>
                    <span>{fullName}</span>
                    <span>{phone}</span>
                    <span>{sex}</span>
                    <span>{salary}</span>
                    <span>{position}</span>
                    <span>{createAt}</span>
                </li>
            );
        }
        return arrWorkers;
    };

    render() {
        return (
            <div className={styles.listWorkers}>
                <div className={styles.title}>{ this.props.title }</div>
                { this.props.component }
                <ul>{ this.renderWorkers() }</ul>
            </div>
        );
    }

    componentDidMount() {
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