import React from "react";


const Form = ({ setInputText, inputText, setTodoItem, todoItems, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();

        setTodoItem([ ...todoItems, { text: inputText, completed: false, id: Math.random() }]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input type="text" value={inputText} className="todo-input" onChange={inputTextHandler} placeholder="Add some task here" />
            <button type="submit" className="todo-button" onClick={submitTodoHandler}>
                <i className="fas fa-plus"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;