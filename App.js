// written by Ajadi Mayowa Samuel
// pushed on 21st 08 2022
// for float solution hub
// 08166064166

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet, Text, View, SafeAreaView,
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignUpScreen';
import Dashboard from './screens/Dashboard';
import TutorsScreen from './screens/TutorsScreen.js';
import FavouriteBooks from './screens/FavouriteBooks.js';
import DepartmentBooksScreen from './screens/DepartmentBooksScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons"

let stack = createNativeStackNavigator()
let drawer = createDrawerNavigator()
let tabs = createBottomTabNavigator()


function TabScreens() {
  return (
    <tabs.Navigator screenOptions={{ headerShown: false }}>
      <tabs.Screen options={{ tabBarIcon: () => { return <Ionicons name="home" size={24} /> } }} name='HomePage' component={DrawerScreens} />
      <tabs.Screen options={{ tabBarIcon: () => { return <Ionicons name="book" size={24} /> } }} name='Tutors' component={TutorsScreen} />
      <tabs.Screen options={{ tabBarIcon: () => { return <Ionicons name="heart" size={24} /> } }} name='Favourites' component={FavouriteBooks} />
    </tabs.Navigator>
  )
}

function DrawerScreens() {
  return (
    <drawer.Navigator>
      <drawer.Screen name='Home' component={Dashboard} />
      <drawer.Screen name='Favorite Books' component={LoginScreen} />
      <drawer.Screen name='Good Reads' component={SignupScreen} />
    </drawer.Navigator>
  )
}

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

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen options={{ headerShown: false }} name='Dashboard' component={TabScreens} />
          <stack.Screen name='BookList' component={DepartmentBooksScreen} />
        </stack.Navigator>
      </NavigationContainer>
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
