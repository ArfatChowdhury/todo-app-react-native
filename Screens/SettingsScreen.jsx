import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../src/ThemeContext'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const SettingsScreen = () => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext)
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Settings</Text>
      <View>
        <Text style={styles.settingTitle}>Theme Switch</Text>
        <View style={styles.ThemeContainer}>
          <Text style={styles.themeText}>Dark Mode</Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
          />
        </View>
        <View>
          <Text style={[styles.settingTitle, { marginTop: 10 }]}>Theme Settings</Text>
          <View style={styles.settingBtnCon}>
            <View style={styles.settingCon}>
              <Ionicons name='bulb-outline' size={24} color='black' />
              <Text style={styles.themeText}>Light Mode</Text>
            </View>
            <Ionicons name={theme === 'light' ? 'radio-button-on' :'radio-button-off'} size={24} color='black' />
          </View>
          <View style={styles.settingBtnCon}>
            <View style={styles.settingCon}>
              <Ionicons name='moon' size={24} color='black' />
              <Text style={styles.themeText}>Dark Mode</Text>
            </View>
            <Ionicons name={theme === 'dark' ? 'radio-button-on' : 'radio-button-off'} size={24} color='black' />
          </View>
          <View style={styles.settingBtnCon}>
            <View style={styles.settingCon}>
            <MaterialCommunityIcons name="lightbulb-auto-outline" size={24} color='black' />
              <Text style={styles.themeText}>System</Text>
            </View>
            <Ionicons name='radio-button-off' size={24} color='black' />
          </View>
        </View>
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    paddingHorizontal: '4%'
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  ThemeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    marginTop: 10
  },
  themeText: {
    fontSize: 16,
    fontWeight: 500
  },
  settingBtnCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
    marginTop:10
  },
  settingCon:{
    flexDirection:'row',
    gap:10
  }
})