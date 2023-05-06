import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import TelaA from './pages/TelaA';
import TelaB from './pages/TelaB';
import TelaC from './pages/TelaC';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaA" component={TelaA} />
      <Stack.Screen name="TelaB" component={TelaB} />
      <Stack.Screen name="TelaC" component={TelaC} />
    </Stack.Navigator>
  );
}

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default function App() {  
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
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
