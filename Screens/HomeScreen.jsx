import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import AddTodo from '../Components/AddTodo'
import RenderTodo from '../Components/RenderTodo'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <RenderTodo></RenderTodo>
      </View>
      <KeyboardAvoidingView  
        style={styles.bottomSection} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'android' ? 20 : 0}
      >
          <AddTodo />
      </KeyboardAvoidingView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    paddingHorizontal: '4%',
    flex: 1,
    justifyContent: 'space-between'
  },
  content: {
    flex: 1
  },
  bottomSection: {
    marginBottom: 40
  }
})