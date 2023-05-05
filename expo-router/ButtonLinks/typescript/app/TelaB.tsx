import React from "react";
import { View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import Redirect from "../components/redirect";
import Title from "../components/title";

const app: React.FC = () => {

    return(
        <View style={styles.container}> 
            <Title TEXT="pagina TelaB"/>
            <Redirect URL="/TelaC" TEXT="Ir para a TelaC" />
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