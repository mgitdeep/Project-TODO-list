import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
    const [items, setItems] = useState([
      {
        id: 1,
        checked: false,
        item: " One half pound bag of Cocoa Covered Almonds Unsalted"
      },
      {
        id: 2,
        checked: false,
        item: " Item 2"
      },
      {
        id: 3,
        checked: true,
        item: " Item 3"
      }
    ]);

  return (
    <main>
      <ul type="none">
        {items.map ((item) => (
          <li className='item' key={item.id}>
            <input type="checkbox" checked={item.checked}/>
            <label>{item.item}</label>
            {/* <button>Delete</button> */}
            <FaTrashAlt role={'button'} tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content