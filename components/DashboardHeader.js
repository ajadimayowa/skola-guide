import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import Hamburger from './Hamburger';
import { Ionicons } from "@expo/vector-icons"

function DashboardHeader({ action, settingsFunction }) {
    return (
        <View style={styles.container}>
            <Hamburger action={action} />
            <Text style={styles.titleText}>Skolar</Text>
            <Pressable onPress={settingsFunction} style={({ pressed }) => pressed ?
                [styles.pressedIcon, styles.icon] : [styles.icon]}>
                <Ionicons style={styles.icon} name="settings" size={24} />
            </Pressable>

        </View>
    );
}

export default DashboardHeader;

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: 110,
        paddingBottom: 20,
        backgroundColor: '#252650'


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
        letterSpacing: 5,
    }
});
