
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './src/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import { ContextProvider } from './src/Context';




const Stack = createStackNavigator()


export default function App() {
  return (
    <ThemeProvider>
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} options={{ presentation: 'modal' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </ThemeProvider>
  );
}

