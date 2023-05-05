import { View,Text,Pressable,StyleSheet } from "react-native"

const TelaB= () => {
    return(
        <View style={styles.container}>
            <Titulo/>
            <View style={styles.footer}>
           
            </View>
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