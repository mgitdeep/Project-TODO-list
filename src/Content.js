import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

// const Content = () => {
//     const [items, setItems] = useState([
//       {
//         id: 1,
//         checked: false,
//         item: " One half pound bag of Cocoa Covered Almonds Unsalted"
//       },
//       {
//         id: 2,
//         checked: false,
//         item: " Item 2"
//       },
//       {
//         id: 3,
//         checked: true,
//         item: " Item 3"
//       }
//     ]);

//     const handleCheck = (id) => {
//       console.log(`Key is: ${id}`)
//     }

  // return (
  //   <main>
  //     {/* <ul type="none">
  //       {items.map ((item) => (
  //         <li className='item' key={item.id}>
  //           <input 
  //             type="checkbox" 
  //             onChange={() => handleCheck(item.id)}
  //             checked={item.checked}
  //           />
  //           <label>{item.item}</label> */}
  //           {/* <button>Delete</button> */}
  //           {/* <FaTrashAlt role={'button'} tabIndex="0" />
  //         </li>
  //       ))}
  //     </ul>

  //     <p>{9+9}</p> */}

  //   </main>
  // )
// }

// function Content(props){
//   console.log(props)
//   return <h1>Hello {props.name}!, {props.color}</h1>
// }

function formatName(firstname, surname) {
  return firstname + " " + surname;
}

// export default Content;
export {formatName}



/* 

function add(a) {
  return a + a
}

add(6)
*/