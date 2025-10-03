import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar></Navbar>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal:'4%',
    paddingTop:'10%'
  },
});
