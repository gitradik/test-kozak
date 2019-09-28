import React, {Component} from 'react';
import styles from './ListWorkers.module.sass';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import history from "../../utils/history";
import WorkerChangeButton from "../WorkerChangeButton/WorkerChangeButton";
import {addWorker, creationWorker, getWorkers, putWorkerModalForm} from "../../actions/actionCreator";

class ListWorkers extends Component {
    renderWorkers() {
        const { workers } = this.props;
        const arrWorkers = [];
        for (let i = 0; i < workers.length; i++) {
            const {_id, fullName, phone, sex, salary, position, createAt} = workers[i];
            arrWorkers.push(
                <li key={i} onClick={() => history.push('/worker/' + _id)}>
                    <WorkerChangeButton
                        content="Change"
                        onClick={ () => {
                            this.props.creationWorker({ fullName, phone, sex, salary, position });
                            this.props.putWorkerModalForm(true)
                        } }
                    />
                    <div className={styles.liBox}>
                        <span>{fullName}</span>
                        <span>{phone}</span>
                        <span>{sex}</span>
                    </div>
                    <div className={styles.liBox}>
                        <span>{salary}</span>
                        <span>{position}</span>
                        <span>{createAt}</span>
                    </div>
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
}

ListWorkers.propTypes = {
    title: PropTypes.string,
    workers: PropTypes.array,
    putWorker: PropTypes.func,
};

ListWorkers.defaultProps = {
    title: "",
    workers: [],
};

const mapStateToProps = (state) => {
    const { worker, isValid, isOpenPut} = state.creationWorkerReducer;
    return { worker, isValid, isOpenPut };
};

const mapDispatchToProps = (dispatch) => ({
    creationWorker: (data) => dispatch(creationWorker(data)),
    putWorkerModalForm: (value) => dispatch(putWorkerModalForm(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListWorkers);