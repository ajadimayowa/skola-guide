import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../stacked/Dashboard';
import SubjectsScreen from '../stacked/SubjectsScreen';
import BooksScreen from '../stacked/BooksScreen';
import BookDetailScreen from '../stacked/BookDetailScreen'
import MainHeader from '../../components/main/MainHeader'
import { useLayoutEffect } from 'react'

let mainstack = createNativeStackNavigator()

function StackedScreens({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        })
    })

    return (
        < mainstack.Navigator>

            <mainstack.Screen name='Dashboard' component={Dashboard} />
            <mainstack.Screen name='BookDetailScreen' component={BookDetailScreen} />
            <mainstack.Screen name='SubjectsScreen' component={SubjectsScreen} />
            <mainstack.Screen name='BooksScreen' component={BooksScreen} />

        </mainstack.Navigator >)
}

export default StackedScreens;