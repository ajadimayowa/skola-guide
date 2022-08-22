import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import Hamburger from './Hamburger';
import { Ionicons } from "@expo/vector-icons"

function DashboardHeader() {
    return (
        <View style={styles.container}>
            <Hamburger />
            <Text style={styles.titleText}>Skolar</Text>
            <Pressable style={({ pressed }) => pressed ?
                [styles.pressedIcon, styles.icon] : [styles.icon]}>
                <Ionicons style={styles.icon} name="settings" size={24} />
            </Pressable>

        </View>
    );
}

export default DashboardHeader;

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
