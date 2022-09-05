import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function BooksScreen({ navigation }) {
    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.container}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../../assets/images/dashboard-bg-image.png')}>

                <SafeAreaView style={styles.container}>

                    <Text style={styles.p}>Book Detail Screen</Text>
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

export default BooksScreen;

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
