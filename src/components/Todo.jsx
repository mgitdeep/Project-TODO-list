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

 
  const handleOnchange = (e) => {
    setUserInput(e.target.value)
  }

  const addItem = () => {
    if (!userInput) {
      alert('Please add an item!')
    } 

    // this condition is only for the last editing part
    else if(userInput && toggleIcon) {
      setItems(items.map((elm) => {
        if ( elm.id === editedItem.id ) {
          return {...elm, name: userInput}
        }
        return elm
      }))
      setToggleIcon(false)
    } 
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
    setItems([])
  }
 

  // Edit the item
  const editItem = (curElm) => {
    const editThisItem = items.find((curElmm) => {
      
      return curElmm === curElm
    });
    setUserInput(editThisItem.name) 
    setToggleIcon(true)
    setEditedItem(curElm)
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
                />

                { toggleIcon ? <i className="fa fa-edit" onClick={addItem}></i> : <i className="fa fa-plus" onClick={addItem}></i>}
                
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