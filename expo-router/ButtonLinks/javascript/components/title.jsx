import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = ({TEXT}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{TEXT}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#000"
    }
})

export default Title;