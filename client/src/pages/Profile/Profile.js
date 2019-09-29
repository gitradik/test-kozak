import React from 'react';
import styles from './Profile.module.sass';
import connect from 'react-redux/es/connect/connect';
import { removeWorker } from "../../actions/actionCreator";

class Profile extends React.Component {
    render() {
        return (
            <div className={styles.profile}>
                Profile
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { isFetching } = state.accountReducer;
    return { isFetching };
};

const mapDispatchToProps = (dispatch) => ({
    removeWorker: () => dispatch(removeWorker())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);