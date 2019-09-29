import React, {Component} from 'react';
import styles from './ListWorkers.module.sass';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import history from "../../utils/history";
import { setWorkerId } from '../../api/rest/config';
import WorkerChangeButton from "../WorkerChangeButton/WorkerChangeButton";
import { creationWorker, putWorkerModalForm } from "../../actions/actionCreator";
import 'aos/dist/aos.css'

class ListWorkers extends Component {
    renderWorkers() {
        const { workers, removeWorkerFunc, creationWorker, putWorkerModalForm } = this.props;
        const arrWorkers = [];
        for (let i = 0; i < workers.length; i++) {
            const {_id, fullName, phone, sex, salary, position, createAt} = workers[i];
            arrWorkers.push(
                <li data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                    data-aos-offset={0}
                    data-aos-duraction={(i * 100) + 1000}
                    key={i}
                    onClick={() => history.push('/worker/' + _id)}>
                    <div className={styles.actionButtons}>
                        <WorkerChangeButton
                            content="Edit"
                            onClick={ () => {
                                setWorkerId(_id);
                                creationWorker({ fullName, phone, sex, salary, position });
                                putWorkerModalForm(true);
                            } }
                        />
                        <WorkerChangeButton
                            content="Remove"
                            onClick={ () => {
                                setWorkerId(_id);
                                removeWorkerFunc();
                            }}
                        />
                    </div>
                    <div className={styles.liBox}>
                        <span><i className="fas fa-signature"/>{fullName}</span>
                        <span><i className="fas fa-phone-alt"/>{phone}</span>
                        <span><i className="fas fa-female mr-0"/>/<i className="fas fa-male"/>{sex}</span>
                    </div>
                    <div className={styles.liBox}>
                        <span><i className="fas fa-donate"/>{salary}</span>
                        <span><i className="fas fa-briefcase"/>{position}</span>
                        <span><i className="far fa-calendar-alt"/>{createAt}</span>
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

    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate() {
        this.aos.refresh();
    }
}

ListWorkers.propTypes = {
    title: PropTypes.string,
    workers: PropTypes.array,
    putWorker: PropTypes.func,
    removeWorkerFunc: PropTypes.func,
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