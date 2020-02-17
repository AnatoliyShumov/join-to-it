import React from 'react';
import { Switch,Router } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import User from './pages/Users/User';
import history from './tools/history'

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Layout exact path="/" component={Home} />
                <Layout  path="/user/:id" component={User} />
                <Layout  path="/user" component={Users} />
            </Switch>
        </Router>
    );
};

export default Routes;