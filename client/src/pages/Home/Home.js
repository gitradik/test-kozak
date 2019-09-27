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
import Modal from "react-bootstrap/Modal";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
        };
    }

    onChangeForm = ({ fullName, phone, sex, salary, position }) => {
        console.log(fullName, phone, sex, salary, position)
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
                        component={<AddWorkerForm onChange={this.onChangeForm}/>}
                    />
                </ButtonToolbar>

                <ListWorkers/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { workers, isFetching, error } = state.workersReducer;
    return { workers, isFetching, error };
};

export default connect(mapStateToProps)(Home);