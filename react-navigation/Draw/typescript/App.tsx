import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Pressable, Text, View, StyleSheet } from "react-native";
import Title from "./components/title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title TEXT="pagina Home" />
    </View>
  );
};

const TelaA = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title TEXT="pagina TelaA" />
    </View>
  );
};

const TelaB = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title TEXT="pagina TelaB" />
    </View>
  );
};

const TelaC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title TEXT="pagina TelaC" />
    </View>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="TelaA" component={TelaA} />
      <Drawer.Screen name="TelaB" component={TelaB} />
      <Drawer.Screen name="TelaC" component={TelaC} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#9cdad6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "300",
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;