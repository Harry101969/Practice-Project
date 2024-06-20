import React, { useEffect, useMemo, useState } from 'react'

function Hookspractice() {
    const number = [2, 3, 4]
    useEffect(() => {
        const result = number.map((nums) => nums * 2)
        console.log(result)
    }, [number])
    const [title, setTitle] = useState("My name is Harry!");
    function updateTitle() {
        setTitle("My name is" + Math.random());
    }
    return (
        <div>
            <button onClick={updateTitle}>Update the title</button>
            <Nav title={title}></Nav>
            <Nav title="Harry1" />
            <Nav title="Harry2" />
            <Nav title="Harry3" />
            <Nav title="Harry4" />
        </div>
    )
}
const Nav = React.memo(function ({ title }) {
    return (
        <div>
            {title}
        </div>
    )
})
export default Hookspractice
