
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

function DepartmentHolder({ action, deptImage, deptTitle, tappedId }) {
    const id = tappedId
    const navigation = useNavigation()

    function filterBooks() {
        console.log(id)
        navigation.navigate('BookList', { id })
    }


    return (
        <Pressable onPress={filterBooks} style={({ pressed }) => pressed ? [styles.pressed, styles.container] : [styles.container]}>
            <View style={styles.container} >
                <MaterialIcons name={deptImage} size={50} color="#fff" />
                <Text style={styles.titleText}>{deptTitle}</Text>
            </View>
        </Pressable>
    );
}

export default DepartmentHolder;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E79C3D',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 5,
        width: 126,
        height: 111,
        margin: 10

    },
    pressed: {
        opacity: 0.8,
        backgroundColor: '#8E5E20'
    },
    titleText: {
        color: '#fff',
        fontFamily: 'avenir',
        fontSize: 13,
        fontWeight: "500"
    }
});
