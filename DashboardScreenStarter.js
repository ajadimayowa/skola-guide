import { useState } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground, KeyboardAvoidingView, ScrollView
} from 'react-native';
import { DEPARTMENTS } from '../../data/Departments';
import { LinearGradient } from 'expo-linear-gradient';
import { useLayoutEffect } from 'react';
import SecondaryHeader from '../../components/main/SecondaryHeader';
import SettingModal from '../../components/modals/SettingModal';

function BooksScreen({ navigation, route }) {
    const [screenMenuOff, setScreenMenuOn] = useState(false)
    const tappedDeptId = route.params.id
    const tappedDeptTitle = DEPARTMENTS.find((depatments) => depatments.id === tappedDeptId).name_of_department

    function toggleScreenMenu() {
        setScreenMenuOn(!screenMenuOff)
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => { return <SecondaryHeader toggleMenu={toggleScreenMenu} exStyle={styles.header} /> },
            headerShown: true,
            tabBarShown: false

        })
    })
    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.screen}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../../assets/images/dashboard-bg-image.png')}>
                <KeyboardAvoidingView style={styles.screen}>
                    <SafeAreaView>
                        <ScrollView bounces={false} style={styles.screen}>
                            <View style={styles.container}>
                                <SettingModal toggleOff={toggleScreenMenu} state={screenMenuOff} />
                                <Text style={styles.p}>Books Scree</Text>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </LinearGradient>
    );
}

export default BooksScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        minWidth: '100%',
        alignItems: 'center',
        paddingHorizontal: '10%',
        paddingVertical: '10%',
    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    },
    header: {
        backgroundColor: '#252650'
    }
});
