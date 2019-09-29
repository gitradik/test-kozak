import React from 'react';
import styles from './ReduxForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { validate, renderTextField } from '../../utils/validation/authorization';

class SignUpForm extends React.Component {
    render() {
        return <form className={[styles.ReduxForm, styles.ReduxFormSignUp].join(' ')} onChange={this.props.onChange}>
            <div className={styles.title}>{ this.props.title }</div>
            <div className={styles.field}>
                <Field name="login" component={renderTextField} type="text" label="Login" placeholder="Login"/>
            </div>
            <div className={styles.field}>
                <Field name="email" component={renderTextField} type="text" label="Email" placeholder="Email"/>
            </div>
            <div className={styles.field}>
                <Field name="password" component={renderTextField} type="password" label="Password" placeholder="Password"/>
            </div>
        </form>
    }
}

SignUpForm.propTypes = {
    onChange: PropTypes.func,
};

SignUpForm = reduxForm({
    form: 'SignUpForm',
    validate,
})(SignUpForm);

export default connect(
    state => ({
        initialValues: state.creationAccountReducer.user,
    }),
)(SignUpForm);


