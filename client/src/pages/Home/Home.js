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
import { addWorker, creationWorker, getWorkers } from '../../actions/actionCreator';
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import { setSkip, getLimit, getSkip } from "../../api/rest/config";
import PaginationCounter from "../../components/PaginationCounter/PaginationCounter";
import Modal from "react-bootstrap/Modal";

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

    onClickNextBtn = () => {
        const { workers, getWorkers, maxCount } = this.props;
        const skip = getSkip();
        if (workers.length === getLimit() && (getSkip() / getLimit() + 1) < Math.ceil(this.props.maxCount / getLimit())) {
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
                    <FormButton variant="primary" onClick={() => this.setState({ addModalShow: true })}
                                fontawesomeIcon="fas fa-user-plus"
                                content="Add new worker" />
                    <AddWorkerModal
                        title="Add new worker"
                        fontawesomeIcon="fas fa-user-plus"
                        show={addModalShow}
                        onHide={() => this.setState({ addModalShow: false })}
                        component={<><AddWorkerForm onChange={this.onChangeForm} />
                                <FormButton variant="primary" onClick={this.onSubmitForm}
                                            fontawesomeIcon=""
                                            content="add worker"
                                            isDisabled={!this.props.isValid} /></> }
                    />
                </ButtonToolbar>
                <ListWorkers
                    component={<div className={styles.paginationButtons}>
                        <ButtonPagination
                            onClick={this.onClickPrevBtn}
                            fontawesomeIcon="fas fa-chevron-left"
                        />
                        <PaginationCounter
                            page={ (getSkip() / getLimit()) + 1 }
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
    }
}

const mapStateToProps = (state) => {
    const { worker, isValid } = state.creationWorkerReducer;
    const { workers, isFetching, maxCount } = state.workersReducer;
    return { worker, isValid, workers, isFetching, maxCount };
};

const mapDispatchToProps = (dispatch) => ({
    addWorker: (data) => dispatch(addWorker(data)),
    creationWorker: (data) => dispatch(creationWorker(data)),
    getWorkers: () => dispatch(getWorkers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);