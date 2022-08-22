import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import Hamburger from './Hamburger';
import { Ionicons } from "@expo/vector-icons"

function TitleText() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Choose
                Department</Text>
        </View>
    );
}

export default TitleText;

const styles = StyleSheet.create({
    container: {
        width: '100%',

        // backgroundColor: 'red'
    },
    titleText: {
        color: '#E79C3D',
        fontFamily: 'avenir',
        fontSize: 40,
    }
});
