import React from 'react'

function Btn () {

    function handleClick() {
        console.log("Someone clicked!")
    }
    return (
        <button onClick={handleClick}>Click ME</button>
    )
}

export default Btn