import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import _ from 'lodash';
import {getAccountByToken} from "../../actions/actionCreator";
import MyLoader from "../../components/MyLoader/MyLoader";

const PrivateRouterSignInUp = ({component: Component, ...rest}) => {

    useEffect(() => {
        if (!rest.account) {
            rest.getAccountByToken();
        }
    }, []);

    return (
        <Route
            {...rest}
            render={props => {
                if(rest.isFetching) {
                    return <MyLoader />;
                }
                else {
                    if (!_.isNull(rest.account)) {
                        return <Redirect
                            to={{
                                pathname: '/',
                                state: {from: props.location}
                            }}
                        />;
                    } else return <Component {...props} />;
                }
            }}
        />
    )
};

const mapStateToProps = (state) => {
    const {account, isFetching, error, } = state.accountReducer;
    return {account, isFetching, error, };
};

const mapDispatchToProps = (dispatch) => ({
    getAccountByToken: () => dispatch(getAccountByToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouterSignInUp);