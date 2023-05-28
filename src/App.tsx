import { useState } from "react";
import { Header } from "./Components/Header";
import { TaskForm, TaskTypes } from "./Components/TaskForm";
import { TaskList } from "./Components/TaskList";
import "./global.css";

const App = () => {
const[tasks, setTasks] = useState<TaskTypes[]>([])

    return (
        <>
            <Header />
            <div className="content">
                <TaskForm tasks={tasks} setTasks={setTasks}/>
                <TaskList tasks={tasks} setTasks={setTasks}/>
            </div>
        </>
    )
}

export default App;