import React from 'react';
import ReactDOM from 'react-dom'
import Demo from './main'
import store from './store'
import { HashRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import LoginCom from './component/Login'
import App from './App'
import './index.less'

ReactDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>,
    document.getElementById('root')
)