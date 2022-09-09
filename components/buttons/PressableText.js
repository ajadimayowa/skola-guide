import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

function PressableText({ onPress, exStyle, children }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed ? styles.pressed : null}>
            <Text style={[styles.text, exStyle]}>{children}</Text>
        </Pressable>
    )
}

export default PressableText;

const styles = StyleSheet.create({
    pressed: { opacity: 0.5 },
    text: {
        fontFamily: 'montserrat-bold'
    }


})

