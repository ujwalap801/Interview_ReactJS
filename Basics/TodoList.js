import { useState } from 'react';


const TodoList = () => {
    const [inputTodo, setInputTodo] = useState('');
    const [todos, setTodos] = useState(
        [{
            id: 0,
            text: 'JS',
            completed: true
        },
        {
            id: 1,
            text: 'ReactJS',
            completed: false
        }
        ]
    )

    const addTodo = () => {
        if (inputTodo.trim() === "") return;

        const newTodo = {
            id: todos.length + 1,
            text: inputTodo.trim(),
            completed:false
        }

        setTodos((prevTodo) => [...prevTodo, newTodo])
    }


    const handleToggle = (id) => {
        setTodos(todos.map(t => {

            if (t.id === id) {
                return {
                    ...t,
    completed: !t.completed
}
            } else {
                return t;
            }

        }
        ))
    }


    const handleDelete = (id) => {
       setTodos(todos.filter(t => t.id !== id))
    }
    return (
        <>
            <h1>Todo List </h1>
            <div style={{ margin: '0 auto', width: '50%' }}>

                <input placeholder="Enter todo" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />

                <button onClick={addTodo}>Add</button>
                <ul>
                    {todos.map(t =>
                        <li key={t.id}>
                            <input type="checkbox" checked={t.completed} onChange={()=>handleToggle(t.id)} />
                            <span className={t.completed ?"strike":""}>{t.text}</span>
                            <button onClick={()=>handleDelete(t.id)}>Delete</button>

                        </li>)}
                </ul>
            </div>
        </>
    )

}

export default TodoList;