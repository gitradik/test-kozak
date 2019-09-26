import React, { Component } from 'react';
import styles from './SignUp.module.sass';
import '@fortawesome/fontawesome-free/css/all.min.css';
import connect from 'react-redux/es/connect/connect';
import {signUp, creationAccount} from '../../actions/actionCreator'
import SignUpForm from "../../components/ReduxForms/SignUpForm";


class SignUp extends Component {

    onChangeForm = ({ login, email, password }) => {
       this.props.creationAccount({ login, email, password });
    };

    render() {
        return (
            <div className={styles.signUp}>
                <SignUpForm onChange={this.onChangeForm}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {user} = state.creationAccountReducer;
    return {user};
};

const mapDispatchToProps = (dispatch) => ({
    signUp: (data) => dispatch(signUp(data)),
    creationAccount: (data) => dispatch(creationAccount(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

