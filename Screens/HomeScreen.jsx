import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import AddTodo from '../Components/AddTodo'
import RenderTodo from '../Components/RenderTodo'
import { ThemeContext } from '../src/ThemeContext'
import { Colors } from '../src/Colors'


const HomeScreen = () => {
  const { theme } = useContext(ThemeContext)
  const colors = theme === 'dark' ? Colors.dark : Colors.light
  return (
    <>
      <StatusBar 
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
        translucent={false}
      />
      <KeyboardAvoidingView
        style={[styles.container, {backgroundColor: colors.background}]}
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
    </>
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