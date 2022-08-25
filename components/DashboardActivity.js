import { StyleSheet, Pressable, Text } from "react-native";
function DashboardActivity({ children, action, exStyle }) {
    return (
        <Pressable onPress={action} style={({ pressed }) => pressed ? [styles.pressed] : [styles.container]}>
            <Text style={[styles.titleText, exStyle]}>{children}</Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    container: {
    },
    titleText: {
        color: '#fff',
        fontFamily: 'montserrat-bold',
        opacity: 1
    },
    pressed: {
        opacity: 0.8
    }
})

export default DashboardActivity;