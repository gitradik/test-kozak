import React, {Component} from 'react';
import styles from './Home.module.sass';
import connect from 'react-redux/es/connect/connect';

class Home extends Component {
    render() {
        return (
            <div className={styles.home}>
                { JSON.stringify(this.props.account) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {account} = state.accountReducer;
    return {account};
};

export default connect(mapStateToProps)(Home);