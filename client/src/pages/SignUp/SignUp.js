import React, { Component } from 'react';
import styles from './SignUp.module.sass';
import '@fortawesome/fontawesome-free/css/all.min.css';
import connect from 'react-redux/es/connect/connect';
import {signUp, creationAccount} from '../../actions/actionCreator'
import SignUpForm from "../../components/ReduxForms/SignUpForm";
import FormButton from "../../components/FormButton/FormButton";

class SignUp extends Component {

    onChangeForm = ({ login, email, password }) => {
       this.props.creationAccount({ login, email, password });
    };

    onSubmitForm = () => {
        const { signUp, user } = this.props;
        signUp(user);
    };

    render() {
        return (
            <div className={styles.signUp}>
                <SignUpForm onChange={this.onChangeForm} />
                <FormButton
                    content="Submit"
                    onClick={this.onSubmitForm}
                    isDisabled={!this.props.isValid}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {user, isValid} = state.creationAccountReducer;
    console.log(user);
    return {user, isValid};
};

const mapDispatchToProps = (dispatch) => ({
    signUp: (data) => dispatch(signUp(data)),
    creationAccount: (data) => dispatch(creationAccount(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

