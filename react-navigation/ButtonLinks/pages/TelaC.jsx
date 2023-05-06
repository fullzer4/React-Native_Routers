import { View,Text,Pressable,StyleSheet, Button } from "react-native"
import Titulo from "../components/titulo"

const TelaC = (navigation) => {
    const TelaB = () => {
        navigation.navigate("TelaB")
    }
    
    return(
        <View>
            <Titulo/>
            <Button 
                title="Tela Anterior"
                onPress={() => TelaB()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default TelaC