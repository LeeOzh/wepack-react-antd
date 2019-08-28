import React, { PureComponent } from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export default class About extends PureComponent {
    constructor(props){
        super(props)
    }

    state ={ 

    }

    render() {
        return (
            <Card>
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Card>
        )
    }
}