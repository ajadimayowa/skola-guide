import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import Hamburger from './Hamburger';
import { Ionicons } from "@expo/vector-icons"
import { Children } from 'react';

function TitleText({ children }) {
    return (

        <Text style={styles.titleText}>{children}</Text>

    );
}

export default TitleText;

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        marginBottom: '2%'
    },
    titleText: {
        color: '#E79C3D',
        fontFamily: 'avenir',
        fontSize: 40,
        width: '100%',
        marginTop: 25
    }
});
