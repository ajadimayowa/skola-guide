import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function TutorsScreen() {
    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.container}>
            <ImageBackground style={styles.container} resizeMode="stretch"
                source={require('../assets/images/login-bg-image.png')}>
                <SafeAreaView style={styles.container}>

                    <Text style={styles.p}>Tutors are here Screen</Text>
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
