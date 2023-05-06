import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, Text, View, StyleSheet } from "react-native";
import Title from "./components/title"

const Home = ({navigation}) => {

    return(
        <View style={styles.container}> 
            <Title TEXT="pagina Home"/>
            <Pressable onPress={()=> navigation.navigate('TelaA')} style={styles.button}>
                <Text style={styles.buttonText}>Ir para TelaA</Text>
            </Pressable>
        </View>
    )
}

const TelaA = ({navigation}) => {

    return(
        <View style={styles.container}> 
            <Title TEXT="pagina TelaA"/>
            <Pressable onPress={()=> navigation.navigate('TelaB')} style={styles.button}>
                <Text style={styles.buttonText}>Ir para TelaB</Text>
            </Pressable>
        </View>
    )
}

const TelaB = ({navigation}) => {

    return(
        <View style={styles.container}> 
            <Title TEXT="pagina TelaB"/>
            <Pressable onPress={()=> navigation.navigate('TelaC')} style={styles.button}>
                <Text style={styles.buttonText}>Ir para TelaC</Text>
            </Pressable>
        </View>
    )
}

const TelaC = ({navigation}) => {

    return(
        <View style={styles.container}> 
            <Title TEXT="pagina TelaC"/>
            <Pressable onPress={()=> navigation.navigate('Home')} style={styles.button}>
                <Text style={styles.buttonText}>Ir para Home</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#9cdad6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "300"
    }
})

const app = () => {

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="TelaA" component={TelaA} />
                <Stack.Screen name="TelaB" component={TelaB} />
                <Stack.Screen name="TelaC" component={TelaC} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default app;