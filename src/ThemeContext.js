import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, use, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import * as NavigationBar from 'expo-navigation-bar'; 


export const ThemeContext = createContext()


export const ThemeProvider = ({children}) =>{
const systemTheme = useColorScheme()
const [mode, setMode] = useState('system')
const [isLoading, setIsLoading] = useState(true);
const [theme, setTheme] = useState(systemTheme || 'light')


useEffect(()=>{
    const loadTheme = async () =>{  
        const savedTheme = await AsyncStorage.getItem('user-theme')
        const savedMode = await AsyncStorage.getItem('theme-mode')
        if(savedMode === 'user' && (savedTheme)){
            setTheme(savedTheme)
            setMode('user')
        }else{
            setTheme(systemTheme || 'light')
            setMode('system')
        }
    }
    loadTheme()
},[])

useEffect(()=>{
    setIsLoading(false)
    AsyncStorage.setItem('user-theme', theme)
    AsyncStorage.setItem('theme-mode', mode)
},[theme,mode])

useEffect(()=>{
    if(mode === 'system'){
        setTheme(systemTheme)

    }
},[systemTheme, mode])

useEffect(() => {
   
    if (theme === 'dark') {
        NavigationBar.setBackgroundColorAsync('#121212');
    } else {
        NavigationBar.setBackgroundColorAsync('#ffffff');
    }
}, [theme]); 

const toggleTheme = () =>{
    setMode('user')
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
}
const setSystemTheme = () =>{
    setMode('system')
    setTheme(systemTheme || 'light')
}
const value =  {theme, setTheme, toggleTheme, mode, setMode, setSystemTheme, setMode}

return(
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
)
}