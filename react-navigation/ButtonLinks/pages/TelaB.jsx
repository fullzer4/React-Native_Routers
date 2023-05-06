import { View,Text,Pressable,StyleSheet, Button } from "react-native"
import Titulo from "../components/titulo"
import { NavigationContainer } from '@react-navigation/native';
import { createNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const TelaB= (navigation) => {
    const TelaA = () => {
        navigation.navigate("TelaA")
    }

    const TelaC = () => {
    navigation.navigate("TelaC")
    }  
    
    return(
        <View style={styles.container}>
            <Titulo/>
            <Button 
                title="Tela Anterior"
                onPress={() => TelaA()}
            />
            <Button 
                title="Próxima Tela"
                onPress={() => TelaC()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    
    },
    footer:{
        
    }
})

export default TelaB