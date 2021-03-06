import React, { Component } from 'react';
import styles from '../SignUp/SignUp.module.sass';
import '@fortawesome/fontawesome-free/css/all.min.css';
import connect from 'react-redux/es/connect/connect';
import {signIn, loginUserAccount} from '../../actions/actionCreator'
import SignInForm from "../../components/ReduxForms/SignInForm";
import FormButton from "../../components/FormButton/FormButton";
import LinkButton from "../../components/LinkButton/LinkButton";
import PAGE_LINKS from "../../utils/pageLinks";

class SignUp extends Component {

    onChangeForm = ({ login, password }) => {
        this.props.loginUserAccount({ login, password });
    };

    onSubmitForm = () => {
        const { signIn, user } = this.props;
        signIn(user);
    };

    render() {
        const { error, isValid } = this.props;
        return (
            <div className={styles.signUp}>
                <span className={styles.signUpErrorMessage}>{ (error && isValid) && error.message }</span>
                <SignInForm
                    title="Authorization"
                    onChange={this.onChangeForm} />
                <FormButton
                    content="Login"
                    onClick={this.onSubmitForm}
                    isDisabled={!this.props.isValid}
                />
                <LinkButton content="SignUp" link={PAGE_LINKS.SIGN_UP} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { error } = state.accountReducer;
    const { user, isValid } = state.creationAccountReducer;
    return { user, isValid, error };
};

const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch(signIn(data)),
    loginUserAccount: (data) => dispatch(loginUserAccount(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

