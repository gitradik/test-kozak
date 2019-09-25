import React from 'react';
import { Provider } from 'react-redux';
import config from './config';
import App from '../App';

export default function Store() {
    const store = config();

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};
