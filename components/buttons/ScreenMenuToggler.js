import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';

function ScreenMenuToggler({ exStyle, iconSize, onPress, iconColor, icon }) {

    return (
        <View style={styles.outerView}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={[styles.innerView, exStyle]}>
                    <Entypo name={icon} size={iconSize} color={iconColor} />
                </View>
            </Pressable>
        </View>
    )
}

export default ScreenMenuToggler;

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

