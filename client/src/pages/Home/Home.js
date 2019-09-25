import React, {Component} from 'react';
import styles from './Home-module.sass';
import EntryButton from "../../components/EntryButton/EntryButton";

class Home extends Component {
    render() {
        return (
            <div className={styles.home}>
                <EntryButton
                    content="SignUp"
                    link="/signUp"
                />
            </div>
        );
    }
}

export default Home;