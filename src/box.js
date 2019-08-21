import React, { PureComponent } from 'react'
import { Router } from 'react-router'

export default class Box extends PureComponent{
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
                asdasdasdasdasdasd
            </div>
        )
    }
}