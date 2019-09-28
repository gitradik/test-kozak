import React from 'react';
import styles from './ReduxForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { validate, renderTextField } from '../../utils/validation/authorization';

class SignInForm extends React.Component {
    render() {
        return <form className={[styles.ReduxForm, styles.ReduxFormSignIn].join(' ')} onChange={this.props.onChange}>
            <div className={styles.title}>{ this.props.title }</div>
            <div className={styles.field}>
                <Field name="login" component={renderTextField} type="text" label="Login" placeholder="Login"/>
            </div>
            <div className={styles.field}>
                <Field name="password" component={renderTextField} type="text" label="Password" placeholder="Password"/>
            </div>
        </form>
    }
}

SignInForm.propTypes = {
    onChange: PropTypes.func,
};

SignInForm = reduxForm({
    form: 'SignInForm',
    validate,
})(SignInForm);

export default connect(
    state => ({
        initialValues: state.creationAccountReducer.user,
    }),
)(SignInForm);


