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
import MyLoader from "../../components/MyLoader/MyLoader";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
        };
    }

    onChangeForm = ({ fullName, phone, sex, salary, position }) => {
        this.props.creationWorker({fullName, phone, sex, salary, position});
    };

    onSubmitForm = () => {
        const { worker, addWorker } = this.props;
        addWorker(worker);
    };

    render() {
        const { modalShow } = this.state;
        return (
            <div className={styles.home}>
                <ButtonToolbar className={styles.btnToolbar}>
                    <FormButton variant="primary" onClick={() => this.setState({ modalShow: true })}
                                fontawesomeIcon="fas fa-user-plus"
                                content="Add new worker"
                    />

                    <AddWorkerModal
                        show={modalShow}
                        onHide={() => this.setState({ modalShow: false })}
                        component={
                            <>
                                <AddWorkerForm onChange={this.onChangeForm}/>
                                <FormButton variant="primary" onClick={this.onSubmitForm}
                                            fontawesomeIcon="fas fa-user-plus"
                                            content="Add new worker"
                                            isDisabled={!this.props.isValid}
                                />
                            </>
                        }
                    />
                </ButtonToolbar>
                <ListWorkers workers={this.props.workers ? this.props.workers : []}/>
            </div>
        );
    }

    componentDidMount() {
        this.props.getWorkers();
    }
}

const mapStateToProps = (state) => {
    const { worker, isValid } = state.creationWorkerReducer;
    const { workers, isFetching } = state.workersReducer;
    console.log(workers);
    return { worker, isValid, workers, isFetching };
};

const mapDispatchToProps = (dispatch) => ({
    addWorker: (data) => dispatch(addWorker(data)),
    creationWorker: (data) => dispatch(creationWorker(data)),
    getWorkers: () => dispatch(getWorkers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);