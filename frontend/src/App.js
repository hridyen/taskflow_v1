import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    const API = "http://localhost:5000";


    const fetchTasks = async () => {

        const res = await axios.get(`${API}/tasks`);

        setTasks(res.data);

    };


    const createTask = async () => {

        if (!title) return;

        await axios.post(`${API}/tasks`, {
            title: title
        });

        setTitle("");

        fetchTasks();

    };


    const deleteTask = async (id) => {

        await axios.delete(`${API}/tasks/${id}`);

        fetchTasks();

    };


    useEffect(() => {

        fetchTasks();

    }, []);


    return (

        <div style={{ padding: 40 }}>

            <h1>TaskFlow</h1>

            <input
                value={title}
                placeholder="Enter task..."
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={createTask}>
                Add Task
            </button>


            <ul>

                {tasks.map(task => (

                    <li key={task._id}>

                        {task.title}

                        <button onClick={() => deleteTask(task._id)}>
                            delete
                        </button>

                    </li>

                ))}

            </ul>

        </div>

    );

}

export default App;