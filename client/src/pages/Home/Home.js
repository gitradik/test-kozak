import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Home.module.sass';
import connect from 'react-redux/es/connect/connect';
import ListWorkers from "../../components/ListWorkers/ListWorkers";
import FormButton from "../../components/FormButton/FormButton";
import {ButtonToolbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddWorkerModal from "../../components/AddWorkerModal/AddWorkerModal";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
        };
    }

    render() {
        const { modalShow } = this.state;
        return (
            <div className={styles.home}>
                <ButtonToolbar>
                    <FormButton variant="primary" onClick={() => this.setState({ modalShow: true })}
                                fontawesomeIcon="fas fa-user-plus"
                                content="Add new worker"
                    />

                    <AddWorkerModal
                        show={modalShow}
                        onHide={() => this.setState({ modalShow: false })}
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