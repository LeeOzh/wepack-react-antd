import React from 'react';
import ReactDOM from 'react-dom'
import Demo from './main'
import store from './store'
import { HashRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import LoginCom from './component/Login';


export default class App extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Router>
                <Route path="/">
                    <Redirect to="/login" />
                    <Route path="/main" component={Demo} />
                </Route>
                <Route path="/login" exact={true} component={LoginCom} />
            </Router>
        )
    }
}