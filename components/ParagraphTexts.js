import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import Hamburger from './Hamburger';
import { Ionicons } from "@expo/vector-icons"

function ParagraphTexts() {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraphTexts}>Select a department that best fit your
                field of study.</Text>
        </View>
    );
}

export default ParagraphTexts;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingRight: '15%'
    },
    paragraphTexts: {
        color: '#fff',
        fontFamily: 'montserrat-semi-bold',
        fontSize: 15,
    }
});
