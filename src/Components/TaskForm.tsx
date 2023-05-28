import {PlusCircle} from '@phosphor-icons/react'
import styles from './TaskForm.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type TaskTypes = {
    id: string;
    title: string;
    isComplete: boolean;
}

interface TaskSubmitFormProps {
    tasks: TaskTypes[];
    setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>
}

export function TaskForm({tasks, setTasks}: TaskSubmitFormProps) {
    const[newTask, setNewTask] = useState("");

    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setTasks([{id: uuidv4(), title: newTask, isComplete: false}, ...tasks])
        setNewTask("");
    }

    function handleChange(event: ChangeEvent <HTMLInputElement>) {
        setNewTask(event.target.value);
    }


    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Adicione uma tarefa...."
                onChange={handleChange}
                value={newTask}
                required
                />
                <button className={styles.btnSubmit} type="submit">Criar
                <PlusCircle />
                </button>
            </form>
        </>
    )
}