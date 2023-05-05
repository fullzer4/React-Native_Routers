import React from "react";
import { StyleSheet, View, Text, ViewStyle, TextStyle } from "react-native";

interface TextProps {
    TEXT: string
}

const Title: React.FC<TextProps> = ({TEXT}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{TEXT}</Text>
        </View>
    )
}

interface Styles {
    container: ViewStyle,
    title: TextStyle
}

const styles = StyleSheet.create<Styles>({
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