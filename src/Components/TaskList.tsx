import { TaskTypes } from './TaskForm';
import styles from './TaskList.module.css'
import {Trash, Clipboard} from '@phosphor-icons/react';

interface TaskSubmitFormProps {
    tasks: TaskTypes[];
    setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>
}

export function TaskList({tasks, setTasks}: TaskSubmitFormProps) {
    function handleTaskComplete(id: string) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.isComplete = !task.isComplete
                }
                return task;
            })
        )
    }

    function handleTaskDelete(id: string) {
        setTasks(
            tasks.filter((task) => {
                return task.id !== id;
            })
        )
    }


    let countTask = tasks.length;
    let countTaskCompleted = tasks.filter(({isComplete}) => {
     return isComplete;
    }).length;

    return (
        <>  
            <div className={styles.status}>
                <p>Tarefas Criadas <span>{countTask}</span></p>
                <p>Concluídas <span>{countTaskCompleted} de {countTask}</span></p>
            </div>
            {countTask > 0 ?  
            <ul className={styles.list}>
                {tasks.map(({id, title, isComplete}) => {
                    return <li key={id}>
                                <button 
                                onClick={() => handleTaskComplete(id)}
                                className={isComplete ? styles.buttonComplete : styles.button}
                                >
                                </button>
                                <p className={isComplete ? styles.titleTaskComplete : styles.titleTask}>{title}</p>
                                <button onClick={() => handleTaskDelete(id)} className={styles.btnTrash}>
                                    <Trash />
                                </button>
                            </li>
                })}
            </ul>
            :  <div className={styles.holdIntro}>
                    <p>Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer</p>
                    <Clipboard />
                </div> }
        </>
    )
}