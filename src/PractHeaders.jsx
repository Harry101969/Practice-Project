import React, { useState } from 'react'

function PractHeaders({ title }) {
    const [titles, setTitle] = useState(title)
    function UpdateTitle() {
        setTitle(Math.random())
    }
    return (
        <div>
            <button onClick={UpdateTitle}>Update-Title</button>
            <h1>My name is {titles}</h1>
        </div>
    )
}

export default PractHeaders
