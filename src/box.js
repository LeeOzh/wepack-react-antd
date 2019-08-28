import React, { PureComponent } from 'react'
import { Carousel, Card, Icon } from 'antd';

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
                            <img src="../src/images/nw.jpg" style={{width: "100%"}}></img>
                        </div>
                        <div>
                            <img src="../src/images/nw2.jpg"></img>
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
            </Card>
        )
    }
}