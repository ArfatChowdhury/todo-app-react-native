import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <Ionicons name='settings-outline' size={30} color='black' />
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