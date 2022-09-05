import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from "@expo/vector-icons"
import { useLayoutEffect } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function TutorsScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            drawerIcon: ({ color, size }) => <FontAwesome name={"book"} color={color} size={size} />
        })
    }, [navigation])
    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.container}>
            <ImageBackground style={styles.container} resizeMode="stretch"
                source={require('../assets/images/login-bg-image.png')}>
                <SafeAreaView style={styles.container}>

                    <Text style={styles.p}>Available Tutors</Text>
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

export default TutorsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    }
});
