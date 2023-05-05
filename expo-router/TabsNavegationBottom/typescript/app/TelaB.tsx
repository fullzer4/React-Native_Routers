import { View, ViewStyle, StyleSheet } from "react-native"
import React from "react"
import Title from "../components/title"

const app: React.FC = () => {
    return(
        <View style={styles.container}>
            <Title TEXT="TelaB"/>
        </View>
    )
}

interface Styles {
    container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default app