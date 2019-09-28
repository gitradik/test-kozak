import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Home.module.sass';
import connect from 'react-redux/es/connect/connect';
import ListWorkers from "../../components/ListWorkers/ListWorkers";
import FormButton from "../../components/FormButton/FormButton";
import {ButtonToolbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddWorkerModal from "../../components/AddWorkerModal/AddWorkerModal";
import AddWorkerForm from "../../components/ReduxForms/AddWorkerForm";
import { addWorker, putWorker, creationWorker, getWorkers, putWorkerModalForm, removeWorker } from '../../actions/actionCreator';
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import { setSkip, getLimit, getSkip } from "../../api/rest/config";
import PaginationCounter from "../../components/PaginationCounter/PaginationCounter";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { addModalShow: false, };
    }

    onChangeForm = ({ fullName, phone, sex, salary, position }) => {
        this.props.creationWorker({fullName, phone, sex, salary, position});
    };

    onSubmitForm = () => {
        const { worker, addWorker } = this.props;
        addWorker(worker);
        setTimeout(() => {
            this.setState({ addModalShow: false });
            setTimeout(() => this.props.getWorkers(), 0);
        }, 0);
    };

    onSubmitFormPut = () => {
        const { worker, putWorker, putWorkerModalForm } = this.props;
        putWorker(worker);
        setTimeout(() => {
            putWorkerModalForm(false);
            setTimeout(() => this.setState({}), 0);
        }, 0);
    };

    onClickRemoveWorker = () => {
        this.props.removeWorker();
        setTimeout(() => this.setState({}), 0);
    };

    onClickNextBtn = () => {
        const { workers, getWorkers, maxCount } = this.props;
        const skip = getSkip();
        if (workers.length === getLimit() && (Math.ceil(getSkip() / getLimit()) + 1) < Math.ceil(maxCount / getLimit())) {
            setSkip(skip + getLimit());
            setTimeout(() => getWorkers(), 0);
        }
    };

    onClickPrevBtn = () => {
        const skip = getSkip();
        if(skip >= getLimit()) {
            setSkip(skip - getLimit());
            setTimeout(() => this.props.getWorkers(), 0);
        }
    };

    render() {
        const { addModalShow } = this.state;
        return (
            <div className={styles.home}>
                <ButtonToolbar className={styles.btnToolbar}>
                    <FormButton
                        dataAos="zoom-in-down" dataAosOffset={0} dataAosDuraction={1000}
                        variant="primary" onClick={() => {
                        this.props.creationWorker({ fullName: '', phone: '', sex: '', salary: '', position: '' });
                        setTimeout(() => this.setState({ addModalShow: true }), 0);
                    }}
                                fontawesomeIcon="fas fa-user-plus"
                                content="Add new worker" />
                    <AddWorkerModal
                        fontaw="fas fa-user-plus"
                        title="Add new worker"
                        show={addModalShow}
                        onHide={() => this.setState({ addModalShow: false })}
                        component={<><AddWorkerForm onChange={this.onChangeForm} />
                                <FormButton variant="primary" onClick={this.onSubmitForm}
                                            fontawesomeIcon=""
                                            content="add worker"
                                            isDisabled={!this.props.isValid} /></> }
                    />
                    <AddWorkerModal
                        fontaw="fas fa-user-edit"
                        title="Edit worker"
                        show={this.props.isOpenPut}
                        onHide={() => this.props.putWorkerModalForm(false)}
                        component={<><AddWorkerForm onChange={this.onChangeForm} />
                                <FormButton variant="primary" onClick={this.onSubmitFormPut}
                                            fontawesomeIcon=""
                                            content="submit"
                                            isDisabled={!this.props.isValid} /></> }
                    />
                </ButtonToolbar>
                <ListWorkers
                    removeWorkerFunc={this.onClickRemoveWorker}
                    component={<div data-aos="fade-left" data-aos-offset={0} data-aos-duraction={800} className={styles.paginationButtons}>
                        <ButtonPagination
                            onClick={this.onClickPrevBtn}
                            fontawesomeIcon="fas fa-chevron-left"
                        />
                        <PaginationCounter
                            page={ Math.ceil(getSkip() / getLimit()) + 1 }
                            maxPage={ Math.ceil(this.props.maxCount / getLimit() ) }
                        />
                        <ButtonPagination
                            onClick={this.onClickNextBtn}
                            fontawesomeIcon="fas fa-chevron-right"
                        />
                    </div>}
                    title="List of employees"
                    workers={this.props.workers ? this.props.workers : []}
                />
            </div>
        );
    }

    componentDidMount() {
        this.props.getWorkers();
        const AOS = require('aos');
        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate() {
        this.aos.refresh();
    }
}

const mapStateToProps = (state) => {
    const { worker, isValid, isOpenPut} = state.creationWorkerReducer;
    const { workers, isFetching, maxCount } = state.workersReducer;
    return { worker, isValid, workers, isFetching, maxCount, isOpenPut };
};

const mapDispatchToProps = (dispatch) => ({
    addWorker: (data) => dispatch(addWorker(data)),
    putWorker: (data) => dispatch(putWorker(data)),
    removeWorker: () => dispatch(removeWorker()),
    creationWorker: (data) => dispatch(creationWorker(data)),
    getWorkers: () => dispatch(getWorkers()),
    putWorkerModalForm: (value) => dispatch(putWorkerModalForm(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);