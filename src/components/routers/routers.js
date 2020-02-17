import React from 'react';
import { Switch,Router } from 'react-router-dom';
import Layout from '../layout/layout';
// import Home from '../../App';
import Home from '../home/home';
import Users from '../users/users';
import User from '../users/user';
import history from '../tools/history'

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Layout exact path="/" component={Home} />
                <Layout  path="/user" component={Users} />
                <Layout  path="/user:id" component={User} />
            </Switch>
        </Router>
    );
};

export default Routes;