import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import _ from 'lodash';
import { getAccountByToken } from '../../actions/actionCreator';
import MyLoader from "../../components/MyLoader/MyLoader";

const PrivateRouterHome = ({component: Component, ...rest}) => {

    useEffect(() => {
        if(_.isNull(rest.account)) {
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
                    if (_.isNull(rest.account) && !_.isNull(rest.error)) {
                        if(rest.error.name === "Unregistered") {
                            return <Redirect
                                to={{
                                    pathname: '/sign-up',
                                    state: {from: props.location}
                                }}
                            />;
                        }
                    } else return <Component {...props} />;
                }
            }}
        />
    )
};

const mapStateToProps = (state) => {
    const { account, isFetching, error } = state.accountReducer;
    return { account, isFetching, error };
};

const mapDispatchToProps = (dispatch) => ({
    getAccountByToken: () => dispatch(getAccountByToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouterHome);