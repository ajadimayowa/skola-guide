import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground
} from 'react-native';
import { DEPARTMENTS } from '../../data/Departments';
import { LinearGradient } from 'expo-linear-gradient';
import { useLayoutEffect } from 'react';
import MainHeader from '../../components/main/MainHeader';

function BooksScreen({ navigation, route }) {
    const tappedDeptId = route.params.id
    const tappedDeptTitle = DEPARTMENTS.find((depatments) => depatments.id === tappedDeptId).name_of_department
    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => { return <MainHeader /> },
            headerShown: true,
            tabBarShown: false

        })
    })
    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.container}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../../assets/images/dashboard-bg-image.png')}>

                <SafeAreaView>

                    <Text style={styles.p}>Books Screen</Text>
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
