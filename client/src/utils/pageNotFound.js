import React from 'react';
import { Redirect } from 'react-router-dom'

function redirectToHome() {
    return (<Redirect to='/' />);
}

export default redirectToHome;

