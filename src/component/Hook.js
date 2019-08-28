import React, { useState, useEffect } from 'react'
import { Button, Card } from 'antd'

function Hook(props) {
    const [count,setCount] = useState(1);

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    },[count])

    return (
        <Card>
            <div>
                <h1>{count}</h1>
                <Button type="primary" onClick={() => setCount(count + 1)}>
                    Click Me
                </Button>
            </div>
        </Card>
    )
}

export default Hook;