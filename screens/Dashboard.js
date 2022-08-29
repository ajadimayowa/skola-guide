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
    const [counter, addCounterUp] = useState(0)
    const [onSideNav, setSideNav] = useState(false)
    const [settingNav, setSettingNav] = useState(false)
    const { width, height } = useWindowDimensions()

    const activityText = DashboardActions[counter].toString()

    let deviceWidth = width
    let deviceHeight = height

    useEffect(() => {
        navigation.setOptions({
            header: () => <DashboardHeader
                exStyle={{ height: deviceHeight > 695 ? 100 : 40 }} settingsFunction={toggleSettingNav} action={toggleSideNav} />
        })
    }, [navigation, toggleSideNav])

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

    function goToBookListPage(tappedDeptId) {
        const tappeddeptId = tappedDeptId
        navigation.navigate('Books', { tappeddeptId })
        console.log(tappedDeptId)
    }

    const science = DEPARTMENTS[0]
    const finance = DEPARTMENTS[1]
    const art = DEPARTMENTS[2]
    const trivia = DEPARTMENTS[3]

    return (


        <LinearGradient colors={['#252650', '#01010B']} style={styles.screen}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../assets/images/dashboard-bg-image.png')}>

                <SafeAreaView style={styles.screen}>
                    <ScrollView bounces={false} style={styles.screen}>

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

                            {/* departments section */}
                            <ScrollView bounces={false} contentContainerStyle={styles.DeptSectionInnerStyle}
                                style={styles.DeptSection}>
                                <View style={{ flexDirection: 'row' }}>
                                    <DepartmentHolder action={goToBookListPage.bind(this, science.id)} deptImage={science.icon_name}
                                        deptTitle={science.name_of_department} />

                                    <DepartmentHolder action={goToBookListPage.bind(this, finance.id)} deptImage={finance.icon_name}
                                        deptTitle={finance.name_of_department} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <DepartmentHolder action={goToBookListPage.bind(this, art.id)} deptImage={art.icon_name}
                                        deptTitle={art.name_of_department} />

                                    <DepartmentHolder action={goToBookListPage.bind(this, trivia.id)} deptImage={trivia.icon_name}
                                        deptTitle={trivia.name_of_department} />
                                </View>
                            </ScrollView>
                            <View style={styles.serviceArea}><DirectionButton action={prevAction} direction={"keyboard-arrow-left"}
                                size={24} color={'#fff'} /><DashboardActivity
                                    action={goToSelectedActivity.bind(this, activityText)}>
                                    {DashboardActions[counter]}</DashboardActivity>
                                <DirectionButton
                                    direction={"keyboard-arrow-right"}
                                    size={24} color={'#fff'} action={nextAction} />
                            </View>

                        </View>
                    </ScrollView>
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
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },
    DeptSection: {
        width: '100%',
        maxHeight: '55%',
        paddingVertical: 10,
        marginBottom: 30
    },
    DeptSectionInnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',


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
