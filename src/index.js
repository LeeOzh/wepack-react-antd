import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './main'
import { Router, Route, Link } from 'react-router'

import Main from './main'
import Box from './box'

const routeConfig = [
    {
        path: '/',
        component: Main,
        childRoutes: [
            {
                path: '/home',
                component: Main,
                childRoutes: [
                    {
                        path:'/home/box',
                        component: Box
                    }
                ]
            }
        ]
    }
]

ReactDOM.render(<Router routes={routeConfig} />, document.getElementById('root'))
// ReactDOM.render(<Demo />,document.getElementById('root'))
// ReactDOM.render(<Router><Route path='/' component={Demo} /></Router>,document.getElementById('root'))
