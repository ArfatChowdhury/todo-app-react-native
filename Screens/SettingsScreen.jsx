import { StyleSheet, Switch, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../src/ThemeContext'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../src/Colors'
import { useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
  const { theme, setTheme, toggleTheme, mode, setSystemTheme, setMode } = useContext(ThemeContext)
  const colors = theme === 'dark' ? Colors.dark : Colors.light
  const navigation = useNavigation()
  return (
    <>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
        translucent={false}
      />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
       <View style={styles.headerCon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back-sharp' size={24} color={theme === 'dark' ? "white" : 'black'} />
        </TouchableOpacity>
       <Text style={[styles.titleText, { color: colors.text }]}>Settings</Text>
       </View>
        <View>
          <Text style={[styles.settingTitle, { color: colors.text }]}>Theme Switch</Text>
          <View style={[styles.ThemeContainer, { backgroundColor: colors.surface }]}>
            <Text style={[styles.themeText, { color: colors.text }]}>Dark Mode</Text>
            <Switch
              value={theme === 'dark'}
              onValueChange={toggleTheme}
            />
          </View>
          <View>
            <Text style={[styles.settingTitle, { marginTop: 10, color: colors.text }]}>Theme Settings</Text>
            <TouchableOpacity onPress={toggleTheme}>
              <View style={[styles.settingBtnCon, { backgroundColor: colors.surface }]}>
                <View style={styles.settingCon}>
                  <Ionicons name='bulb-outline' size={24} color={colors.icon} />
                  <Text style={[styles.themeText, { color: colors.text }]}>Light Mode</Text>
                </View>
                <Ionicons name={theme === 'light' && mode === 'user' ? 'radio-button-on' : 'radio-button-off'} size={24} color={colors.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleTheme}>
              <View style={[styles.settingBtnCon, { backgroundColor: colors.surface }]}>
                <View style={styles.settingCon}>
                  <Ionicons name='moon' size={24} color={colors.icon} />
                  <Text style={[styles.themeText, { color: colors.text }]}>Dark Mode</Text>
                </View>
                <Ionicons name={theme === 'dark' && mode === 'user' ? 'radio-button-on' : 'radio-button-off'} size={24} color={colors.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setSystemTheme}>
              <View style={[styles.settingBtnCon, { backgroundColor: colors.surface }]}>
                <View style={styles.settingCon}>
                  <MaterialCommunityIcons name="lightbulb-auto-outline" size={24} color={colors.icon} />
                  <Text style={[styles.themeText, { color: colors.text }]}>System</Text>
                </View>
                <Ionicons name={mode === 'system' ? 'radio-button-on' : 'radio-button-off'} size={24} color={colors.icon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  settingCon: {
    flexDirection: 'row',
    gap: 10
  },
  headerCon:{
    flexDirection:'row',
    gap:10
  }
})