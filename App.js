import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Vitoria from './vitoria';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>vitoria Você deve seguir a mesma lógica que utilizamos para criar o componente Title</Text>
      <StatusBar style="auto" />
      <Vitoria></Vitoria>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
