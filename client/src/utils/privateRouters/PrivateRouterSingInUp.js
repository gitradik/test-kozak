import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import Loader from 'react-loader-spinner';
import _ from 'lodash';

const PrivateRouterSignInUp = ({component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => {
                if(rest.isFetching) {
                    return <Loader type="Bars" color="orange" height={40} width={40}/>;
                }
                else {
                    if (!_.isNull(rest.account)) {
                        return <Redirect
                            to={{
                                pathname: '/',
                                state: {from: props.location}
                            }}
                        />;
                    } else  {
                        return <Component {...props} />;
                    }
                }
            }}
        />
    )
};

const mapStateToProps = (state) => {
    const {account, isFetching, error} = state.accountReducer;
    return {account, isFetching, error};
};

export default connect(mapStateToProps)(PrivateRouterSignInUp);