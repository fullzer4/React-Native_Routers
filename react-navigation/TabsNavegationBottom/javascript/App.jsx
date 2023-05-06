import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet } from "react-native";
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

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="TelaA" component={TelaA} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} />
      </Tab.Navigator>
    </NavigationContainer>
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

export default App;