import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings') }>
      <Ionicons name='settings-outline' size={30} color='black' />
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