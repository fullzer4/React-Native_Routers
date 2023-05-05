import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useRouter } from "expo-router"

interface RedirectProps {
    URL: string,
    TEXT: string
}

const Redirect: React.FC<RedirectProps> = ({ URL, TEXT }) => {
  
    const router = useRouter()
  
    return (
        <Pressable style={styles.button} onPress={() => router.push(URL)}>
            <Text style={styles.buttonText}>{TEXT}</Text>
        </Pressable>
  );
};

interface Styles {
  button: any,
  buttonText: any
}

const styles = StyleSheet.create<Styles>({
    button: {
        backgroundColor: "#9cdad6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "300"
    }
});

export default Redirect;
