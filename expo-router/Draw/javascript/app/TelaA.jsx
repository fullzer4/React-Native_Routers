import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/title";

const app = () => {

    return(
        <View style={styles.container}> 
            <Title TEXT="TelaA"/>
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