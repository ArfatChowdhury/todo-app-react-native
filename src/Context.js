import { createContext, useState } from "react";



export const Context = createContext()

export ContextProvider = ({children}) =>{

    const [tasks, setTasks] = useState([])
    const [initial, setInitial] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredTask = tasks.filter(task => task.task.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const handleAddTask () =>{

        const newTask ={
            id: Date.now(),
            task: initial ,
            isDone: false
        }
        const updatedTasks = [...tasks, newTask]
        
    }

const value = null
    return(
        <Context.Provider value={value} >
        {children}
        </Context.Provider>
    )
}

