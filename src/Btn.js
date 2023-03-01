import React from 'react'

// function Btn() {

    // function handleClick() {
    //     console.log("Someone clicked!")
    // }
    // const handleClick = () => {
    //     console.log("Clickeddd!")
    // }
    // return (
    //     <button onClick={handleClick}>Click ME</button>
    // )
    // const handleMouse = () => {
    //     console.log("Mouse overrr")
    // }
    // return (
    //     <button onMouseOver={handleMouse}>Click ME</button>
    // )
    
// }

function darkMode() {
    let darkModeOn = false;
    const darkMode = "Dark Mode is ON";
    const lightMode = "Light mode is ON"

    function handleClick() {
        console.log("Someone clicked!")
    }

    return (
        <>
            {darkModeOn ? darkMode : lightMode} <br />
            <button onClick={handleClick}>Click me babe</button>
        </>
    )
}

// export default Btn
export {darkMode}