import React, { PureComponent } from 'react'
import { Carousel, Card, Icon, Button } from 'antd';
import request from './network/request'

import './style/box.less'

export default class Box extends PureComponent{
    constructor(props) {
        super(props)
    }
    state = {
    }

    componentDidMount() {
    }

    handlePrev = () => {
        this.refs.carousel.prev();
    }

    handleNext = () => {
        this.refs.carousel.next();
    }

    getUser = () => {
        request.get("http://localhost:3100/user/getUser").then(res => console.log(res))
    }

    render() {
        return (
            <Card>
                <div className="carousel">
                    <Icon type="left-circle"
                          theme="filled" 
                          style={{fontSize: 60}} 
                          className="carousel_icon-left"
                          onClick={this.handlePrev} />
                    <Carousel autoplay effect="fade" ref="carousel">
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        <h3>3</h3>
                        </div>
                        <div>
                        <h3>4</h3>
                        </div>
                    </Carousel>
                    <Icon type="right-circle" 
                          theme="filled" 
                          style={{fontSize:60}} 
                          className="carousel_icon-right"
                          onClick={this.handleNext} />
                </div>
                <Button type="primary" onClick={this.getUser} >获取用户数据</Button>
            </Card>
        )
    }
}