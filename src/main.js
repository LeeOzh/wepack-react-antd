import React, { PureComponent } from 'react'
import Loadable from 'react-loadable'
import {Menu, Icon, Button, message} from 'antd'
import { Route, Link, Redirect, withRouter, } from 'react-router-dom'
import Box from './box'
import About from './component/About'
import Hook from './component/Hook'

import { connect } from 'react-redux'
import store from './store'

const { SubMenu } = Menu;

class Demo extends PureComponent{
    constructor(props) {
        super(props)
    }
    state = {
        current: 'mail',
        isLogin: false,
    }

    onIncrement = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'increment'
        })
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        console.log('willmounts')
        const { history } = this.props;
        const token = localStorage.getItem('token');
        if(!token) {
            console.log('www.hehe.com')
            history.push('/login')
        }
        const { location: { pathname } } = this.props;
        this.pathMatch(pathname)
    }

    pathMatch = (path) => {
        const pn = path.slice(1);
        console.log(pn,'pnpnpn')
        switch(pn) {
            case '' :
                this.setState({
                    current: 'home',
                })
                break;
            case 'about' :
                this.setState({
                    current: 'about'
                })
                break;
            case 'module' :
                this.setState({
                    current: 'module'
                })
                break;
            default:
                return;
        }
    }   

    handleLogout = () => {
        const { history } = this.props;
        localStorage.removeItem('token')
        this.setState({
            isLogin: false
        })
        message.success('登出成功');
        history.push('/login')

    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    checkLogin = () => {
        const { isLogin } = this.state;
        const { history } = this.props;
        if(!isLogin) history.push('/login')
    }

    render() {
        console.log(this.state.current)
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={this.state.current} mode="horizontal" style={{background:'#03dac6',border:'none',}}>
                    <Icon type="android" theme="filled" style={{margin: '0 30px',color:"#fff", fontSize: 40}} spin={false} />
                    <Menu.Item key="home">
                    <Icon type="mail" />
                        <Link to='/main/box' style={{display: 'inline-block'}}>首页</Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                    <Icon type="appstore" />
                        <Link to='/main/about' style={{display: 'inline-block'}}>关于</Link>
                    </Menu.Item>
                    <Menu.Item key="module">
                        <Link to='/main/module' style={{display: 'inline-block'}}>版块</Link>
                    </Menu.Item>
                    <Menu.Item key="profile">
                        个人中心
                    </Menu.Item>
                    
                    <span onClick={this.handleLogout}>
                    <Icon type="thunderbolt" />登出
                    </span>
                    
                </Menu>

                
                <Redirect from="/main" to="/main/box" />
                <Route path="/main/box" component={Box} />
                <Route path="/main/about" component={About} />
                <Route path="/main/module" component={Hook} />
               
          </div>

        )
    }
}

const mapStateToProps = state => ({
    state,
})

export default connect(mapStateToProps)(withRouter(Demo))
