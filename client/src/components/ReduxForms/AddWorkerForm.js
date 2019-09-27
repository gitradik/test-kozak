import React from 'react';
import styles from './ReduxForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { validate, renderTextField } from '../../utils/validation/addWorker';


class AddWorkerForm extends React.Component {
    render() {
        return <form onChange={this.props.onChange}>
            <div className={styles.field}>
                <Field name="fullName" component={renderTextField} type="text" label="Full name" placeholder="Full name"/>
            </div>
            <div className={styles.field}>
                <Field name="phone" component={renderTextField} type="text" label="Phone" placeholder="Phone"/>
            </div>
            <div className={styles.field}>
                <Field name="sex" component={renderTextField} type="text" label="Sex" placeholder="Sex"/>
            </div>
            <div className={styles.field}>
                <Field name="salary" component={renderTextField} type="text" label="Salary" placeholder="Salary"/>
            </div>
            <div className={styles.field}>
                <Field name="position" component={renderTextField} type="text" label="Position" placeholder="Position"/>
            </div>
        </form>
    }
}

AddWorkerForm.propTypes = {
    onChange: PropTypes.func,
};

AddWorkerForm = reduxForm({
    form: 'AddWorkerForm',
    validate,
})(AddWorkerForm);

export default connect(
    state => ({
        initialValues: state.creationWorkerReducer.worker,
    }),
)(AddWorkerForm);


