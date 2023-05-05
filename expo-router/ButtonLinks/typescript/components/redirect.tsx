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
        <Pressable style={styles} onPress={() => router.push(URL)}>
            <Text>{TEXT}</Text>
        </Pressable>
  );
};

interface Styles {
  
}

const styles = StyleSheet.create<Styles>({

});

export default Redirect;
