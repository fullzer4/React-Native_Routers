import React from "react";
import { View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import Redirect from "../components/redirect";
import Title from "../components/title";

const app: React.FC = () => {

    return(
        <View style={styles.container}>
            <Title TEXT="pagina TelaC"/> 
            <Redirect URL="/" TEXT="Ir para a Home" />
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

export default app;