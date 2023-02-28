import React from 'react'

function Btn () {

    // function handleClick() {
    //     console.log("Someone clicked!")
    // }
    // const handleClick = () => {
    //     console.log("Clickeddd!")
    // }
    // return (
    //     <button onClick={handleClick}>Click ME</button>
    // )
    const handleMouse = () => {
        console.log("Mouse overrr")
    }
    return (
        <button onMouseOver={handleMouse}>Click ME</button>
    )
}

export default Btn