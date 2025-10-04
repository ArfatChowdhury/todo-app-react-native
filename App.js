 
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './src/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';




const Stack = createStackNavigator()


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Settings' component={SettingsScreen} options={{presentation:'modal'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
 
