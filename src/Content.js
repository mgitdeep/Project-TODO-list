import React, { useState } from 'react'

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);
  
    const handleNameChange = () => {
        const names = [ "Dave", "Ram", "Bob" ];
        const int = Math.floor(Math.random() * 3);
    
        setName(names[int]);
    }

    const handleClick = () => {
      // console.log('You clicked it!')
      // console.log(count)
    }

    const handleClick2 = (name) => {
      console.log(count)
    }

    const handleClick3 = (e) => {
      console.log(e.target.innerText)
    }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <br />
        <button onClick={handleNameChange}>Change Name</button>
        <br />
        <button onClick={handleClick2}>Click It</button>
        <br />
        <button onClick={(e) => {handleClick3(e)}}>Click It</button>
    </main>
  )
}

export default Content