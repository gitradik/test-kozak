import React, {Component} from 'react';
import styles from './Home.module.sass';
import connect from 'react-redux/es/connect/connect';
import ListWorkers from "../../components/ListWorkers/ListWorkers";

class Home extends Component {
    render() {
        return (
            <div className={styles.home}>
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