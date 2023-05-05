import { View } from "react-native"

const telaC = () => {
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

export default telaC