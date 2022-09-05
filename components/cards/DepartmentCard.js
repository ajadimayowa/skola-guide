
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

function DepartmentCard({ icon, deptTitle, deptId, iconColor, iconSize }) {
    const id = deptId
    const navigation = useNavigation()

    function filterBooks() {
        navigation.navigate('BooksScreen', { id })
    }


    return (
        <View style={styles.container}>
            <Pressable onPress={filterBooks} style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={styles.innerContainer} >
                    <MaterialIcons name={icon} size={iconSize} color={iconColor} />
                    <Text style={styles.titleText}>{deptTitle}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default DepartmentCard;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: 'blue'

    },
    innerContainer: {
        borderRadius: 5,
        minWidth: 125,
        minHeight: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E79C3D',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { height: 3 }
    },
    pressed: {
        opacity: 0.6,
    },
    titleText: {
        color: '#252650',
        fontFamily: 'avenir',
        fontSize: 15,
        fontWeight: "500",
        textAlign: 'center',
    }
});