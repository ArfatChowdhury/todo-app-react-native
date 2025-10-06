import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import AddTodo from '../Components/AddTodo'
import RenderTodo from '../Components/RenderTodo'


const HomeScreen = () => {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <View style={styles.content}>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <RenderTodo></RenderTodo>
      </View>
      <View style={styles.bottomSection}>
        <AddTodo />
      </View>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    paddingHorizontal: '4%',
    flex: 1,
  },
  content: {
    flex: 1
  },
  bottomSection: {
    marginBottom: 40
  }
})