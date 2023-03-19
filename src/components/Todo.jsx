import { useState } from "react";
import "../styles/Todo.css";

const Todo = () => {

  const [userInput, setUserInput] = useState('')
  // const [item1, setitem1] = useState('')         // It can be used to add items one by one - write, click + - repeat
  const [items, setitems] = useState([])

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
    } else {
      // setitem1(userInput)
      // setitem1(...item1, userInput)      Square bracs required to hold the previous data
      setitems([...items, userInput])

      // Adding Local Storage
      // localStorage.setItem("newItems", items)
      // localStorage.setItem("newItems", [...items])
      localStorage.setItem("newItems", [...items, userInput])
      
    }
    // setitem1(userInput)                  It'll also work but you can't show the alert

    // Clear the item once hit the + button
    // let emptyText = userInput.slice(-1, 0)
    // setUserInput(emptyText)
    // OR
    setUserInput('')
  }

  const deleteItem = (curElm) => {
    // console.log(index)
    const updatedItem = items.filter((curElmm) => {
      return curElmm !== curElm
    });
    setitems(updatedItem)
  }

  const removeAll = () => {
    // let clearAll = items.slice(-1, 0)
    // setitems(clearAll)
    // OR
    setitems([])
  }
  // console.log(items[1])
  // console.log('remove all')


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

                <i className="fa fa-plus" onClick={addItem}></i>
            </div>

            {/* Show our items here */}
            <div className="showItems">
              {items.map( (curElm, index) => {
                // let x = index;
                return (
                  <div className="eachItem" key={index}>
                    <h3>{curElm}</h3>
                    <div className="todo-btn">
                    <i className="fa fa-edit"></i>
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