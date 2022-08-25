// written by Ajadi Mayowa Samuel
// pushed on 21st 08 2022
// for float solution hub
// 08166064166

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignUpScreen';
import Dashboard from './screens/Dashboard';

let screenStacks = createNativeStackNavigator()

export default function App() {

    const [fontLoaded] = useFonts({
        'avenir': require('./assets/fonts/AvenirLTStd-Black.otf'),
        'catoonist': require('./assets/fonts/cartoonist_kooky.ttf'),
        'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
        'montserrat-bold': require('./assets/fonts/Montserrat-Bold.otf'),
        'montserrat-semi-bold': require('./assets/fonts/Montserrat-SemiBold.otf')

    })

    if (!fontLoaded) {
        return <AppLoading />
    }

    let screen = <Dashboard />
    return (
        <>
            <StatusBar style="light" />
            <LinearGradient colors={['#252650', '#01010B']} style={styles.container}>
                <ImageBackground style={styles.container} resizeMode="stretch" source={require('./assets/images/main-bg.png')}>
                    <NavigationContainer>
                        <screenStacks.Navigator>
                            <screenStacks.Screen name='Login Screen' component={LoginScreen} />
                            <screenStacks.Screen name='Book Category Screen' component={Dashboard} />
                        </screenStacks.Navigator>
                    </NavigationContainer>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
