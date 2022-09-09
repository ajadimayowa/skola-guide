import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function BackButton({ exStyle, iconSize, iconColor, icon }) {
    const navigation = useNavigation()

    function goToPreviousPage() {
        navigation.goBack()
    }
    return (
        <View style={styles.outerView}>
            <Pressable onPress={goToPreviousPage} style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={[styles.innerView, exStyle]}>
                    <Ionicons name={icon} size={iconSize} color={iconColor} />
                </View>
            </Pressable>
        </View>
    )
}

export default BackButton;

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

