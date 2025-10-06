import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../src/ThemeContext';

const Navbar = () => {
    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: theme === 'dark' ? 'white' : 'black'}]}>To Do List</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings') }>
      <Ionicons name='settings-outline' size={30} color={theme === 'dark' ? 'white' : 'black'} />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'600'
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})