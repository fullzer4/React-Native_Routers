import React from "react";
import { View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import Redirect from "../components/redirect";
import Title from "../components/title";

const app = () => {

    return(
        <View style={styles.container}> 
            <Title TEXT="pagina TelaA"/>
            <Redirect URL="/TelaB" TEXT="Ir para a TelaB" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default app;