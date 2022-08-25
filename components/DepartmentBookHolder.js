
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

function DepartmentBookHolder({ action, id, bookTitle }) {

    return (
        <Pressable onPress={action} style={({ pressed }) => pressed ? [styles.pressed, styles.container] : [styles.container]}>
            <Text style={styles.titleText}>{id}</Text>
            <Text style={styles.titleText}>{bookTitle}</Text>
        </Pressable>
    );
}

export default DepartmentBookHolder;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 5,
        height: 65,
        marginVertical: 10,
        paddingRight: 30,


    },
    pressed: {
        opacity: 0.8,
        backgroundColor: '#8E5E20'
    },
    titleText: {
        color: '#252650',
        fontFamily: 'avenir',
        fontSize: 15,
        fontWeight: "500",
        textAlign: 'left',
        marginLeft: 30
    }
});
