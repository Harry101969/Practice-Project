import React, { useEffect } from 'react'

export default function HooksPractice2() {
    useEffect(() => {
        alert("Hello Harry!!");
    }, [])
    return (
        <div>
            <h2>Hello Harry!!</h2>
        </div>
    )
}
