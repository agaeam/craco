import { useState } from 'react'
import { Button } from 'antd'
export const Hellow = () => {
    const [count, setconu] = useState(0)
    return (
        <div>
            <Button type='primary' onClick={() => setconu(count + 1)}>确定</Button>
            <div>{count}</div>
        </div>
    )
}