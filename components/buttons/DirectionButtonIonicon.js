import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

function DirectionButtonIonicon({ exStyle, iconSize, onPress, iconColor, icon, children, buttonTextStyle }) {
    return (
        <View style={styles.outerView}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={[styles.innerView, exStyle]}>
                    <Ionicons name={icon} size={iconSize} color={iconColor} />

                </View>
            </Pressable>
        </View>
    )
}

export default DirectionButtonIonicon;

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

