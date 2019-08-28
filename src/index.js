import React from 'react';
import ReactDOM from 'react-dom'
import Demo from './main'
import store from './store'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Demo/>
        </Router>
    </Provider>,
    document.getElementById('root')
)