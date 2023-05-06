// Priject TODO List

import { useState, useEffect } from "react";
import "../styles/Todo.css";

// Getting the Local Storage data
const getLocalData = () => {
  const allData = localStorage.getItem("MyTodoList")
  if (allData) {
    return JSON.parse(allData)
  } else {
    return []
  }
}

const Todo = () => {

  const [userInput, setUserInput] = useState('')
  const [items, setItems] = useState(getLocalData())
  const [editedItem, setEditedItem] = useState('')
  const [toggleIcon, setToggleIcon] = useState(false)
  // const [keyPress, setKeyPress] = useState('')

 
  const handleOnchange = (e) => {
    setUserInput(e.target.value)
  }

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDown, true)        // No need of using useEffect
  // })



  // Add a item only when user hits ENTER
  const handleKeyDown = (e) => {
  
    if (e.key === "Enter" && !userInput) {
      alert('Please add an item!')

    } 
    
    else if (e.key === "Enter" && userInput && toggleIcon) {
      setItems(items.map((elm) => {
        if ( elm.id === editedItem.id ) {
          return {...elm, name: userInput}
        }
        return elm
      }))
      setToggleIcon(false)
      setUserInput('')
    }

    else if (e.key === "Enter" && userInput) {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: e.target.value
      }
      setItems([...items, myNewInputData])
      setToggleIcon(false)

      // clear the writing bar after adding item in the list
      setUserInput('')
    }
    // else {
    //   // setUserInput(e.target.value)        Not required this else, handled by handleOnChange function
    // }
    // setUserInput('')
  }

  const addItem = () => {
    if (!userInput) {
      alert('Please add an item!')
    } 

    // this condition is only for to add the last editing part
    else if(userInput && toggleIcon) {
      setItems(items.map((elm) => {
        if ( elm.id === editedItem.id ) {
          return {...elm, name: userInput}
        }
        return elm
      }))
      setToggleIcon(false)
    } 
    
    // Here brand new items are added
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: userInput
      }
      setItems([...items, myNewInputData])
      setToggleIcon(false)

    } 
    setUserInput('')
  }

  useEffect(() => {
        localStorage.setItem("MyTodoList", JSON.stringify(items))                    
      }, [items])


  // Delete the item
  const deleteItem = (curElm) => {
    const updatedItem = items.filter((curElmm) => {

      return curElmm !== curElm
    });
    setItems(updatedItem)
  }


  // Remove all items
  const removeAll = () => {
    console.log("By © github.com/mgitdeep")
    // console.log(items)

    // used my brain 99% !!
    if (!items[0]) {
      alert("No items to remove!")
    }
    setItems([])
    setUserInput('')
  }
 

  // Edit the item
  const editItem = (curElm) => {
    // console.log(curElm)
    const editThisItem = items.find((curElmm) => {
      // console.log(curElm)
      // console.log(editThisItem)
      return curElmm === curElm
    });
    // console.log(editThisItem)
    setUserInput(editThisItem.name) 
    setToggleIcon(true)
    setEditedItem(curElm)
    // console.log(curElm)
  }


  return (

    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.png" alt="todo" />
                <figcaption>Add your list here ✌</figcaption>
            </figure>
            <div className="addItems">
                <input 
                type="text" 
                placeholder="✍ Add Item"
                value={userInput}
                onChange={handleOnchange}
                onKeyDown={handleKeyDown}
                
                />

                { toggleIcon ? <i className="fa fa-edit" onClick={addItem} ></i> : <i className="fa fa-plus" onClick={addItem} ></i>}
                
            </div>

            {/* Show our items here */}
            <div className="showItems">
              {items.map( (curElm, index) => {
                return (
                  <div className="eachItem" key={index}>
                    <h3>{curElm.name}</h3>
                    <div className="todo-btn">
                    <i className="fa fa-edit" onClick={() => editItem(curElm)}></i>
                    <i className="fa fa-trash-alt" onClick={() => deleteItem(curElm)}></i>
                    </div>
                </div>
                )
              })}
              

            </div>

            <div className="showItems">
              <button className="btn effect04" data-sm-link-text = "Remove All" onClick={removeAll}>
                <span>Check List</span>
              </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo