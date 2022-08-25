import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground,
    FlatList, useWindowDimensions, ScrollView
} from 'react-native';
import Platform from 'react-native';
import DashboardL from './DashboardL';
import { LinearGradient } from 'expo-linear-gradient';
import DashboardHeader from '../components/DashboardHeader';
import SearchBar from '../components/SearchBar';
import TitleText from '../components/TitleText';
import ParagraphTexts from '../components/ParagraphTexts';
import DepartmentHolder from '../components/DepartmentHolder';
import { DEPARTMENTS } from '../data/DataBox'
import { DashboardActions } from '../data/DataBox'
import DirectionButton from '../components/DirectionButton';
import SideNavigation from '../components/SideNavigation';
import { useState } from 'react';

function Dashboard({ navigation }) {
    const [counter, addCounterUp] = useState(0)
    const [onSideNav, setSideNav] = useState(false)

    const { width } = useWindowDimensions()

    let deviceWidth = width

    if (deviceWidth > 450) {
        return <ScrollView style={landscapeStyle.container}><DashboardL /></ScrollView>
    }

    function toggleSideNav() {
        setSideNav(!onSideNav)
        console.log('nav on')
    }

    function nextAction() {
        if (counter === 0 || counter < 2) {
            addCounterUp(counter + 1)
            console.log(deviceWidth)
        } else {
            addCounterUp(0)
        }
    }

    function prevAction() {
        if (counter > 0 || counter === 2) {
            addCounterUp(counter - 1)
            console.log(counter)
        } else {
            addCounterUp(2)
        }
    }

    function handleDepartmentRender(departments) {
        function gotoSelectedDepartmentBooks() {
            const tappedDept = departments.item.name_of_department
            console.log(tappedDept)
            navigation.navigate('Books')
        }
        return <DepartmentHolder action={gotoSelectedDepartmentBooks} deptImage={departments.item.icon_name}
            deptTitle={departments.item.name_of_department} />

    }
    return (


        <LinearGradient colors={['#252650', '#01010B']} style={styles.screen}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../assets/images/dashboard-bg-image.png')}>

                <SafeAreaView style={styles.screen}>

                    <View style={
                        styles.container
                    }>
                        <SideNavigation toggleSideNav={onSideNav} toggle={toggleSideNav} />
                        <DashboardHeader action={toggleSideNav} />
                        <SearchBar />

                        <TitleText>Choose
                            Department.
                        </TitleText>
                        <ParagraphTexts />
                        <View style={{ height: '40%', width: '90%', marginTop: '5%', alignItems: 'center' }}>
                            <FlatList numColumns={2} bounces={false} data={DEPARTMENTS}
                                keyExtractor={(depatments) => depatments.id}
                                renderItem={handleDepartmentRender}
                            />
                        </View>
                        <View style={styles.serviceArea}><DirectionButton action={prevAction} direction={"keyboard-arrow-left"}
                            size={24} color={'#fff'} /><Text style={styles.p}>{DashboardActions[counter]}</Text>
                            <DirectionButton
                                direction={"keyboard-arrow-right"}
                                size={24} color={'#fff'} action={nextAction} />
                        </View>
                    </View>
                </SafeAreaView>


            </ImageBackground>
        </LinearGradient >

    );
}

export default Dashboard;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        paddingBottom: 50
        // backgroundColor: 'red',
    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    },
    title: {
        color: '#fff',
        fontFamily: 'avenir'
    },
    serviceArea: {
        width: '100%', flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: 50, justifyContent: 'space-between'

    }
});

const landscapeStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})
