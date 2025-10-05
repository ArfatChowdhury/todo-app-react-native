import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Context = createContext()

export const ContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])
    const [initial, setInitial] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredTask = tasks.filter(task => task.task.toLowerCase().includes(searchQuery.toLowerCase()))

    const handleIsDone = async (id) => {
        try {
            const newTodos = tasks.map((item) => {
                if (item.id === id) {
                    item.isDone = !item.isDone
                }
                return item
            })
            await AsyncStorage.setItem('tasks', JSON.stringify(newTodos))
            setTasks(newTodos)
        } catch (error) {
            console.log(error);

        }
    }
    const handleAddTask = async () => {
        if (initial.trim() === '') return
        try {
            const newTask = {
                id: Date.now(),
                task: initial,
                isDone: false
            }
            const updatedTasks = [...tasks, newTask]
            setTasks(updatedTasks)
            setInitial('')
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks))
        } catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        const getTodoTask = async () => {
            try {
                const todos = await AsyncStorage.getItem('tasks')
                if (todos !== null) {
                    setTasks(JSON.parse(todos))
                }
            } catch (err) {
                console.log(err);

            }
        }
        getTodoTask()
    }
        , [])

    const deleteTask = async (taskId) => {
        try {
            const updatedTasks = tasks.filter(task => task.id !== taskId)
            setTasks(updatedTasks)
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks))

        } catch (err) {
            console.log(err);

        }
    }

    const value = {
        tasks,
        setTasks,
        searchQuery,
        setSearchQuery,
        initial,
        setInitial,
        filteredTask,
        handleAddTask,
        deleteTask,
        handleIsDone
    }

    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider>
    )
}

