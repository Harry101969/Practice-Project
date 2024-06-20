import React, { useState } from 'react'

function Button({ fn, count2 }) {
    const [count1, setCount1] = useState(1)
    function addNum1() {
        setCount1((count) => count + 3);
    }
    return (
        <div>
            <button onClick={fn}>Counter{count2}</button>
            <h2>Counter for inner button of BUtton.jsx :{count1}</h2>
            <button onClick={addNum1}>Counter{count1}</button>
        </div>
    )
}

export default Button
