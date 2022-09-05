// written by Ajadi Mayowa Samuel
// pushed on 21st 08 2022
// for float solution hub
// 08166064166

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

//handle screen Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

//entry screen
import TabScreens from './screens/tabs/TabScreens';
import DrawerScreens from './screens/drawers/DrawerScreens';
import LoginScreen from './screens/main/LoginScreen';
import SignUpScreen from './screens/main/SignUpScreen';

//create screen types from navigator
let stack = createNativeStackNavigator()
let drawer = createDrawerNavigator()

//import global data from redux store
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


export default function App() {

  //load fonts from expo-fonts
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

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer >
          <stack.Navigator screenOptions={{ headerSHown: false }}>
            <stack.Screen name="Dashboard" component={DrawerScreens} />
            <stack.Screen name="LoginScreen" component={LoginScreen} />
            <stack.Screen name="SignUpScreen" component={SignUpScreen} />
            {/* <stack.Screen name="ForgotPasswordScreen" />
          <stack.Screen name="ResetPasswordScreen" />
          <stack.Screen name="OtpScreen" /> */}
          </stack.Navigator>
        </NavigationContainer>
      </Provider>

    </>
  );
}
