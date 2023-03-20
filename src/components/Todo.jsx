import { useState, useEffect } from "react";
import "../styles/Todo.css";

// Getting the Local Storage data
const getLocalData = () => {
  const allData = localStorage.getItem("MyTodoList")
  // console.log(typeof(allData))
  if (allData) {
    return JSON.parse(allData)
  } else {
    return []
  }
}

const Todo = () => {

  const [userInput, setUserInput] = useState('')
  // const [item1, setitem1] = useState('')               It can be used to add items one by one - write, click + - repeat
  const [items, setItems] = useState(getLocalData())
  const [editedItem, setEditedItem] = useState('')
  const [toggleIcon, setToggleIcon] = useState(false)

  // console.log(typeof(items))                           Note that "items" is an Object which is holding all the data
  // console.log(items)
  const handleOnchange = (e) => {
    setUserInput(e.target.value)
  }
  // let i1
  // const addItem = () => {
  //   console.log('item added')              Horrible code - never work! - the 1st attempt
  //   i1 = setitem1(item1)
  // }

  // when user clicks on + icon

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
      // setitem1(userInput)
      // setitem1(...item1, userInput)      Square bracs required to hold the previous data
      // setItems([...items, userInput])    Note what we've changed! We changed "userInput" to "myNewInputData" 
      setItems([...items, myNewInputData])
      setToggleIcon(false)

      // Adding Local Storage

      // localStorage.setItem("newItems", items)
      // localStorage.setItem("newItems", [...items])
      // localStorage.setItem("newItems", [...items, userInput])
      // localStorage.setItem("newItems", JSON.stringify([...items, userInput]))
      // useEffect(() => {
      //   localStorage.setItem("MyTodoList", JSON.stringify(items))                    - cannot define useEffect inside an ordinary function
      // }, [])
      
      
    } 
    // setitem1(userInput)                  It'll also work but you can't show the alert

    // Clear the item once hit the + button
    // let emptyText = userInput.slice(-1, 0)
    // setUserInput(emptyText)
    // OR
    setUserInput('')
  }
  useEffect(() => {
        localStorage.setItem("MyTodoList", JSON.stringify(items))                    
      }, [items])

  // Delete the item
  const deleteItem = (curElm) => {
    // console.log(index)
    const updatedItem = items.filter((curElmm) => {
      return curElmm !== curElm
    });
    setItems(updatedItem)
  }

  // Remove all items
  const removeAll = () => {
    // let clearAll = items.slice(-1, 0)
    // setItems(clearAll)
    // OR
    console.log("By © github.com/mgitdeep")
    setItems([])
  }
  // console.log(items[1])
  // console.log('remove all')

  // Edit the item
  const editItem = (curElm) => {
    const editThisItem = items.find((curElmm) => {
      // console.log(curElm.name)
      // console.log(editThisItem)
      // console.log(curElmm.name)
      // console.log(curElm)
      // console.log(curElmm)
      return curElmm === curElm
    });
    // console.log(editThisItem)
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
                <figcaption>Add your list here 🔰</figcaption>
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
                // let x = index;
                // {console.log(curElm.id)}
                return (
                  <div className="eachItem" key={index}>
                    {/* <h3>{curElm !== userInput ? curElm : userInput}</h3> */}
                    <h3>{curElm.name}</h3>
                    {/* {console.log(index)} */}
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