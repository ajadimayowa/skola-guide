
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Entypo } from "@expo/vector-icons"

function ThreeDots({ action, externalStyle }) {
    return (
        <Pressable onPress={action} style={({ pressed }) => pressed ? [styles.pressed, styles.container, externalStyle] : [styles.container, externalStyle]}>
            <View style={[styles.container, externalStyle]} >
                <Entypo name="dots-three-horizontal" size={25} color='#E79C3D' />
            </View>
        </Pressable>
    );
}

export default ThreeDots;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        borderRadius: 5,
        height: 40,
        width: 45
    },
    pressed: {
        opacity: 0.8,
    }
});
