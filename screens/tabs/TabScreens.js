import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserBioScreen from './UserBioScreen';
import UserLearningScreen from './UserLearningScreen';
import StackedScreens from '../stacked/StackedScreens'
import { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';

const tab = createBottomTabNavigator()

function TabScreens({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions(
            { headerShown: false }
        )
    })
    return (
        <tab.Navigator>
            <tab.Screen name='Main' component={StackedScreens} />
            <tab.Screen name='UserBioScreen' component={UserBioScreen} />
            <tab.Screen name='UserLeaningScreen' component={UserLearningScreen} />
        </tab.Navigator>
    )
}

const styles = StyleSheet.create({
})
export default TabScreens;