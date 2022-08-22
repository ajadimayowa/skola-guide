
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"

function Hamburger({ action }) {
    return (
        <Pressable style={({ pressed }) => pressed ? [styles.pressed, styles.container] : [styles.container]}>
            <View style={styles.container} >
                <Image source={require('../assets/icons/nav-icon.png')} />
            </View>
        </Pressable>
    );
}

export default Hamburger;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E79C3D',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        borderRadius: 5,
        height: 30,
        width: 30
    },
    pressed: {
        opacity: 0.8,
        backgroundColor: '#8E5E20'
    }
});
