// import React, { useState } from 'react';

// function Todo() {
//     const [todos, setTodos] = useState([{
//         id: Date.now(),
//         todo: "Workout",
//         completed: false
//     }]);
//     const [input, setInput] = useState("");

//     const addTodo = () => {
//         if (input.trim() !== "") {
//             setTodos((prevTodos) => [...prevTodos, {
//                 id: Date.now(),
//                 todo: input,
//                 completed: false
//             }]);
//             setInput("");
//         }
//     };

//     const updateTodo = (id, newTodo) => {
//         setTodos((prevTodos) =>
//             prevTodos.map((prevTodo) =>
//                 prevTodo.id === id ? { ...prevTodo, todo: newTodo } : prevTodo
//             )
//         );
//     };

//     const deleteTodo = (id) => {
//         setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
//     };

//     const markCompleted = (id) => {
//         setTodos((prevTodos) =>
//             prevTodos.map((prevTodo) =>
//                 prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
//             )
//         );
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 disabled
//             />
//             <button onClick={addTodo}>Add Todo</button>
//             {todos.map((todo) => (
//                 <div key={todo.id}>
//                     <span
//                         style={{ textDecoration: todo.completed ? "line-through" : "none" }}
//                     >
//                         {todo.todo}
//                     </span>
//                     <button onClick={() => updateTodo(todo.id, prompt("Update todo:", todo.todo))}>Update Todo</button>
//                     <button onClick={() => markCompleted(todo.id)}>
//                         {todo.completed ? "Undo" : "Completed"}
//                     </button>
//                     <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Todo;
import React, { useState } from 'react';

function Todo() {
    const [todos, setTodos] = useState([{
        id: Date.now(),
        todo: "Workout",
        completed: false
    }]);
    const [input, setInput] = useState("");
    const [editingId, setEditingId] = useState(null); // Track which todo is being edited
    const [editedTodo, setEditedTodo] = useState(""); // Store the edited todo value

    const addTodo = () => {
        if (input.trim() !== "") {
            setTodos((prevTodos) => [...prevTodos, {
                id: Date.now(),
                todo: input,
                completed: false
            }]);
            setInput("");
        }
    };

    const startEditing = (id, todo) => {
        setEditingId(id);
        setEditedTodo(todo);
    };

    const saveTodo = (id) => {
        updateTodo(id, editedTodo);
        setEditingId(null);
        setEditedTodo("");
    };

    const updateTodo = (id, newTodo) => {
        setTodos((prevTodos) =>
            prevTodos.map((prevTodo) =>
                prevTodo.id === id ? { ...prevTodo, todo: newTodo } : prevTodo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
    };

    const markCompleted = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((prevTodo) =>
                prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
            )
        );
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {editingId === todo.id ? (
                        <input
                            type="text"
                            value={editedTodo}
                            onChange={(e) => setEditedTodo(e.target.value)}
                        />
                    ) : (
                        <span
                            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                        >
                            {todo.todo}
                        </span>
                    )}
                    {editingId === todo.id ? (
                        <button onClick={() => saveTodo(todo.id)}>Save</button>
                    ) : (
                        <button onClick={() => startEditing(todo.id, todo.todo)}>Update Todo</button>
                    )}
                    <button onClick={() => markCompleted(todo.id)}>
                        {todo.completed ? "Undo" : "Completed"}
                    </button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Todo;
