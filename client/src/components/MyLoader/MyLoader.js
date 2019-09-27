import React from 'react';
import styles from './MyLoader.module.sass';
import Loader from 'react-loader-spinner';

export default function MyLoader(props) {
    return (<div className={styles.myLoader}><Loader type="Bars" color="orange" height={40} width={40}/></div>);
}
