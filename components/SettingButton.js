
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Pressable
} from 'react-native';
import { Ionicons } from "@expo/vector-icons"

function SettingButton({ action }) {
    return (
        <Pressable onPress={action} style={({ pressed }) => pressed ?
            [styles.pressedIcon, styles.icon] : [styles.icon]}>
            <Ionicons style={styles.icon} name="settings" size={24} color="red" />
        </Pressable>
    );
}

export default SettingButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginTop: '5%'

    },
    icon: {
        color: '#E79C3D'
    },
    pressedIcon: {
        opacity: 0.8
    },
    pressed: {
        opacity: 0.8,
        backgroundColor: '#8E5E20',
        overflow: 'hidden'
    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    },
    titleText: {
        color: '#fff',
        fontFamily: 'catoonist',
        fontSize: 16,
        letterSpacing: 5
    }
});