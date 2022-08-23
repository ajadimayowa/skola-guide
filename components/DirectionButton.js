
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, View, Pressable
} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"

function DirectionButton({ action, direction, color, size }) {
    return (
        <Pressable onPress={action} style={({ pressed }) => pressed ? [styles.pressed, styles.container] : [styles.container]}>
            <View style={styles.container} >
                <MaterialIcons name={direction} color={color} size={size} />
            </View>
        </Pressable>
    );
}

export default DirectionButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E79C3D',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        borderRadius: 17,
        height: 34,
        width: 34
    },
    pressed: {
        opacity: 0.8,
        backgroundColor: '#8E5E20'
    }
});
