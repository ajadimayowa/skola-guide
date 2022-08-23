// written by Ajadi Mayowa Samuel
// pushed on 21st 08 2022
// for float solution hub
// 08166064166

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  StyleSheet, Text, View, SafeAreaView,
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignUpScreen';
import Dashboard from './screens/Dashboard';

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
          {screen}
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
