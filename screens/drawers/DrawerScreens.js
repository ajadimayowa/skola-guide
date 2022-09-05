//this component handles screens registed on the side drawer
import { Button, StyleSheet } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteBooks from './FavoriteBooks';
import BecomeTutorScreen from './BecomeTutorScreen';
import TabScreens from '../tabs/TabScreens';
import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/main/MainHeader'

const drawer = createDrawerNavigator()

function DrawerScreens({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <drawer.Navigator screenOptions={{
            drawerActiveTintColor: '#E79C3D',
            drawerInactiveTintColor: '#fff',
            drawerContentStyle: {
                backgroundColor: '#01010B',
            },
            headerShown: true
        }} >
            <drawer.Screen name='Home' component={TabScreens} />
            <drawer.Screen name='Favorite Books' component={FavoriteBooks} />
            <drawer.Screen name='Become A Tutor' component={BecomeTutorScreen} />
        </drawer.Navigator>
    )
}

export default DrawerScreens;

const styles = StyleSheet.create({
    drawerContentStyle: { backgroundColor: '#01010B' }
})