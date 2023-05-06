import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StyleSheet } from "react-native";
import Title from "./components/title";

const Home = () => {
  return (
    <View style={styles.container}>
      <Title TEXT="pagina Home" />
    </View>
  );
};

const TelaA = () => {
  return (
    <View style={styles.container}>
      <Title TEXT="pagina TelaA" />
    </View>
  );
};

const TelaB = () => {
  return (
    <View style={styles.container}>
      <Title TEXT="pagina TelaB" />
    </View>
  );
};

const TelaC = () => {
  return (
    <View style={styles.container}>
      <Title TEXT="pagina TelaC" />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="TelaA" component={TelaA} />
      <Tab.Screen name="TelaB" component={TelaB} />
      <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;