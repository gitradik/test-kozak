import React, {Component} from 'react';
import styles from './ListWorkers.module.sass';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { setWorkerId } from '../../api/rest/config';
import WorkerChangeButton from "../WorkerChangeButton/WorkerChangeButton";
import { creationWorker, putWorkerModalForm, searchWorkers } from "../../actions/actionCreator";
import 'aos/dist/aos.css';
import moment from 'moment';
import SearchField from "../SearchField/SearchField";

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
                    key={i}>
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
                        <span><i className="fas fa-signature"/>{ fullName }</span>
                        <span><i className="fas fa-phone-alt"/>{ phone }</span>
                        <span><i className="fas fa-female mr-0"/>/<i className="fas fa-male"/>{ sex }</span>
                    </div>
                    <div className={styles.liBox}>
                        <span><i className="fas fa-donate"/>{ salary }</span>
                        <span><i className="fas fa-briefcase"/>{ position }</span>
                        <span><i className="far fa-calendar-alt"/>{ moment(createAt).format('D-MM-YYYY hh:mm:ss') }</span>
                    </div>
                </li>
            );
        }
        return arrWorkers;
    };

    onChangeSearchField = e => {
        this.props.searchWorkers(e.target.value);
        //history.push('/?search=' + e.target.value );
    };

    render() {
        return (
            <div className={styles.listWorkers}>
                <div className={styles.title}>{ this.props.title }</div>
                    <SearchField
                        placeholder="Поиск..."
                        onChange={this.onChangeSearchField}
                    />
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
    searchWorkers: (data) => dispatch(searchWorkers(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListWorkers);