import "../styles/Todo.css";

const Todo = () => {
  return (

    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.png" alt="todo" />
                <figcaption>Add your list here ✌</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder="✍ Add Item" />

                <i className="fa fa-plus add-btn"></i>
            </div>

            {/* Show our items here */}
            <div className="showItems">
              <div className="eachItem">
                  <h3>Apple</h3>
                  <div className="todo-btn">
                  <i className="fa fa-plus add-btn"></i>
                  <i className="fa fa-plus add-btn"></i>
                  </div>
              </div>
            </div>

            <div className="showItems">
              <button className="btn effect04" data-sm-link-text = "Remove All">
                <span>Check List</span>
              </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo