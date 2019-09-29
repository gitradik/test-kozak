import React from 'react';
import styles from './Profile.module.sass';
import connect from 'react-redux/es/connect/connect';
import { removeAccount, questRemoveAccount, getAccountByToken, creationAccount, updateAccount } from "../../actions/actionCreator";
import LinkButton from "../../components/LinkButton/LinkButton";
import PAGE_LINKS from "../../utils/pageLinks";
import FormButton from "../../components/FormButton/FormButton";
import BootstrapModal from "../../components/BootstrapModal/BootstrapModal";
import {ButtonToolbar} from "react-bootstrap";
import history from "../../utils/history";
import SignUpForm from "../../components/ReduxForms/SignUpForm";

class Profile extends React.Component {

    onClickYes = () => {
        this.props.questRemoveAccount(false);
        this.props.removeAccount();
        setTimeout(() => {
            this.props.getAccountByToken();
            history.push(PAGE_LINKS.SIGN_UP);
        }, 0);
    };

    onSubmitForm = () => {
        const { user, updateAccount } = this.props;
        updateAccount(user);
    };

    onChangeForm = ({ login, email, password }) => {
        this.props.creationAccount({ login, email, password });
    };

    render() {
        const { error } = this.props;
        return (
            <div className={styles.profile}>
                <LinkButton className={styles.homeLink} link={PAGE_LINKS.HOME} content="Home" />
                <div className={styles.userForm}>
                    <SignUpForm
                        title={ error && error.message }
                        onChange={ this.onChangeForm }
                    />
                    <FormButton
                        onClick={ this.onSubmitForm }
                        isDisabled={ !this.props.isValid }
                        content="Save"
                    />
                </div>
                <div>
                    <ButtonToolbar className={styles.btnToolbar}>
                        <FormButton
                            variant="primary" onClick={() => this.props.questRemoveAccount(true)}
                            fontawesomeIcon="fas fa-user-minus"
                            content="Remove my account" />
                        <BootstrapModal
                            fontaw="fas fa-user-minus"
                            title="Remove your account?"
                            show={ this.props.isOpenQuestModal }
                            onHide={() => this.props.questRemoveAccount(false)}
                            component={<div className={ styles.questionButtons }>
                                <FormButton className="mr-2" variant="primary" onClick={ this.onClickYes } fontawesomeIcon="" content="yes" />
                                <FormButton variant="primary" onClick={ () => this.props.questRemoveAccount(false) } fontawesomeIcon="" content="no" />
                            </div>}
                        />
                    </ButtonToolbar>
                </div>
            </div>
        );
    }

    componentDidMount() {
        if(this.props.account) {
            this.props.creationAccount({ login: this.props.account.login, email: this.props.account.email });
        }
    }
}

const mapStateToProps = (state) => {
    const { account, isFetching, error } = state.accountReducer;
    const { user, isOpenQuestModal, isValid } = state.creationAccountReducer;
    return { user, isFetching, isOpenQuestModal, isValid, error, account };
};

const mapDispatchToProps = (dispatch) => ({
    removeAccount: () => dispatch(removeAccount()),
    questRemoveAccount: (value) => dispatch(questRemoveAccount(value)),
    getAccountByToken: () => dispatch(getAccountByToken()),
    creationAccount: (data) => dispatch(creationAccount(data)),
    updateAccount: (data) => dispatch(updateAccount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);