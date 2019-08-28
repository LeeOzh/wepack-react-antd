import React, { PureComponent } from 'react'
import {Menu, Icon, Button} from 'antd'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
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
    }

    onIncrement = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'increment'
        })
    }

    componentDidMount() {
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

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    render() {
        console.log(this.state.current)
        return (
          <div>
            <Menu onClick={this.handleClick} selectedKeys={this.state.current} mode="horizontal" style={{background:'#03dac6',border:'none',}}>
                <Icon type="android" theme="filled" style={{margin: '0 30px',color:"#fff", fontSize: 40}} spin={false} />
                <Menu.Item key="home">
                <Icon type="mail" />
                    <Link to='/' style={{display: 'inline-block'}}>首页</Link>
                </Menu.Item>
                <Menu.Item key="about">
                <Icon type="appstore" />
                    <Link to='/about' style={{display: 'inline-block'}}>关于</Link>
                </Menu.Item>
                <Menu.Item key="module">
                    <Link to='/module' style={{display: 'inline-block'}}>版块</Link>
                </Menu.Item>
                <Menu.Item key="alipay">
                    个人中心
                </Menu.Item>
            </Menu>

                <Route path="/" exact={true} component={Box} />
                <Route path="/about" component={About} />
                <Route path="/module" component={Hook} />
          </div>

        )
    }
}

const mapStateToProps = state => ({
    state,
})

export default connect(mapStateToProps)(withRouter(Demo))
