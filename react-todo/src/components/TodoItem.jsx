import React from "react";

const TodoItem = ({value, todo, todoItems, setTodoItem, filteredTodos}) => {

    const deleteHandler = () => {
        setTodoItem(filteredTodos.filter(element => element.id !== todo.id));
    }

    const completeHandler = () => {
        setTodoItem(filteredTodos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{value}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default TodoItem;