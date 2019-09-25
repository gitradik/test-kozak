import React, {Component} from 'react';
import styles from './Home-module.sass';
import connect from 'react-redux/es/connect/connect';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.home}>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {account} = state.accountReducer;
    return {account};
};

export default connect(mapStateToProps)(Home);