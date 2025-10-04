import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <Searchbar></Searchbar>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
container:{
    paddingTop: '10%',
    paddingHorizontal:'4%'
}
})