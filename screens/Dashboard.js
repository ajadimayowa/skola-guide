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
import DashboardActivity from '../components/DashboardActivity';
import { useState, useEffect } from 'react';
import Hamburger from '../components/Hamburger';
import SettingButton from '../components/SettingButton';
import SettingModal from '../components/SettingModal';

function Dashboard({ navigation }) {


    useEffect(() => {
        navigation.setOptions({
            header: () => <DashboardHeader settingsFunction={toggleSettingNav} action={toggleSideNav} />
        })
    }, [navigation, toggleSideNav])


    const [counter, addCounterUp] = useState(0)
    const [onSideNav, setSideNav] = useState(false)
    const [settingNav, setSettingNav] = useState(false)
    const { width } = useWindowDimensions()

    const activityText = DashboardActions[counter].toString()

    let deviceWidth = width

    if (deviceWidth > 450) {
        return <ScrollView style={landscapeStyle.container}><DashboardL /></ScrollView>
    }

    function toggleSideNav() {
        setSideNav(!onSideNav)
    }
    function toggleSettingNav() {
        setSettingNav(!settingNav)
    }

    function nextAction() {
        if (counter === 0 || counter < DashboardActions.length - 1) {
            addCounterUp(counter + 1)

        } else {
            addCounterUp(0)
        }
    }

    function prevAction() {
        if (counter > 0 || counter === DashboardActions.length - 1) {
            addCounterUp(counter - 1)
        } else {
            addCounterUp(2)
        }
    }

    function goToSelectedActivity(pressedActivity) {
        console.log('switching to: ', pressedActivity)
    }

    function handleDepartmentRender(departments) {
        function goToBookListPage() {
            const tappedDept = departments.item.name_of_department
            const tappedDeptImage = departments.item.icon_name
            const tappedDeptId = departments.item.id
            navigation.navigate('Books', { tappedDept, tappedDeptImage, tappedDeptId })
        }

        return <DepartmentHolder action={goToBookListPage} deptImage={departments.item.icon_name}
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
                        <SettingModal state={settingNav} toggleOff={toggleSettingNav} />
                        <SideNavigation toggleSideNav={onSideNav} toggle={toggleSideNav} />

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
                            size={24} color={'#fff'} /><DashboardActivity
                                action={goToSelectedActivity.bind(this, activityText)}>
                                {DashboardActions[counter]}</DashboardActivity>
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
