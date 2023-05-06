import { View,Text,Pressable,StyleSheet, Button } from "react-native"
import Titulo from "../components/titulo"
import { NavigationContainer } from '@react-navigation/native'
import { createNavigationContainerRef } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

const TelaA = (navigation) => {
    const TelaB = () => {
        navigation.navigate("TelaB")
      }
    
    return(
        <View>  
            <Titulo/>
            <Button 
                title="Próxima Tela"
                onPress={() => TelaB()}
            />
        </View> 
    )
}

const styles = StyleSheet.create({

})

export default TelaA