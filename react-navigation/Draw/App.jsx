import * as React from 'react';
import {Pressable,View,Text,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Notifications')}  title="Go to notifications"> 
        <Text> </Text>
      </Pressable>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} title="Go back home" > 
        <Text> </Text>
      </Pressable>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }

})
