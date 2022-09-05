import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function DrawerToggleButton({ exStyle, iconSize, onPress, iconColor, icon, children, buttonTextStyle }) {
    const navigation = useNavigation()

    function toggleDrawer() {
        navigation.toggleDrawer()
    }
    return (
        <View style={styles.outerView}>
            <Pressable onPress={toggleDrawer} style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={[styles.innerView, exStyle]}>
                    <Fontisto name={icon} size={iconSize} color={iconColor} />
                </View>
            </Pressable>
        </View>
    )
}

export default DrawerToggleButton;

const styles = StyleSheet.create({
    outerView: {
        padding: 5,
        overflow: 'hidden'

    },
    innerView: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 30,
        minHeight: 30,
        borderRadius: 5,
        backgroundColor: '#E79C3D'
    },
    pressed: { opacity: 0.5 }


})

