import React, { useState } from 'react'

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


// Exercise 2

// function Darkmode() {

//     const [ x, y ] = useState(false);
//     let darkModeOn = false;
//     const darkMode = <h1>Dark Mode is ON</h1>
//     const lightMode = <h1>Light mode is ON</h1>
//     console.log(darkModeOn);

//     function handleClick() {
//         // darkModeOn = !darkModeOn;
//         // console.log("Someone clicked!")
//         y(darkModeOn = !darkModeOn);
//         console.log(darkModeOn)
//     }

//     return (
//         <>
//             {x ? darkMode : lightMode} <br />
//             <button onClick={handleClick}>Click me babe</button>
//         </>
//     )
// }

// // export default Btn
// export {Darkmode}

// Exercise 3

function InputComponent() { 
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
}

export {InputComponent}