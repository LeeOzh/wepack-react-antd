import React, { PureComponent } from 'react'
import './style/index.less'
import { Router, Route, Link } from 'react-router'
import Box from './box'

export default class Demo extends PureComponent{
    constructor(props) {
        super(props)
    }
    state = {
        count: 1,
        flag: false,
    }

    componentDidMount() {
        console.log(Router)
    }

    handleShowToast = () => {
        this.setState({
            flag: true,
        })
        
    }
    
    handleCancel = () => {
        this.setState({
            flag: false
        })
    }

    render() {
        return (
            <div>
                <h1 className="box">我是一只小毛驴,我重来也不骑{this.state.count}</h1>
                <button onClick={this.handleShowToast}>点我给你一个弹窗</button>
                <div className={["toast",this.state.flag? "active":""].join(" ")} ref="toast">
                    我是一个toast
                    <div>
                        <button className="btn" onClick={this.handleCancel}>取消</button>
                        <button className="btn">确定</button>
                    </div>
                </div>
            </div>
        )
    }
}
