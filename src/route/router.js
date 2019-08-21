import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

import Index from '../index'
import Main from '../main'
import Box from '../box'

// const routeConfig = [
//     {
//         path: '/',
//         component: Main,
//         childRoutes: [
//             {
//                 path: '/home',
//                 component: Main,
//                 childRoutes: [
//                     {
//                         path:'/home/box',
//                         component: Box
//                     }
//                 ]
//             }
//         ]
//     }
// ]

// ReactDOM.render(<Router routes={routeConfig} />, document.body)