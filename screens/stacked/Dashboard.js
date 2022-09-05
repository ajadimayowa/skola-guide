import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView, ImageBackground, useWindowDimensions,
    ScrollView, KeyboardAvoidingView
} from 'react-native';
import { addBookToFavorite, removeBookFromFavorite } from '../../store/redux/favoriteBooksSlice'
import { useDispatch } from 'react-redux'

import { useLayoutEffect, useState } from 'react';
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';
import SettingModal from '../../components/modals/SettingModal'
import TitleText from '../../components/texts/TitleText';
import { DEPARTMENTS } from '../../data/Departments'
import { DashboardActions } from '../../data/DataBox'
import MainHeader from '../../components/main/MainHeader';
import SearchBar from '../../components/inputs/SearchBar';
import Card from '../../components/cards/Card';
import DepartmentCard from '../../components/cards/DepartmentCard';

//importing the data for use from redux
import { useSelector } from 'react-redux'

function Dashboard({ navigation }) {
    const dispatch = useDispatch()
    const onlineUsers = useSelector((states) => { return states.favoriteBooks.favoriteBooksid })
    const buyersLists = useSelector((states) => states.BookData.books)
    const [counter, addCounterUp] = useState(0)
    const [onSideNav, setSideNav] = useState(false)

    const [settingNav, setSettingNav] = useState(false)

    const { width, height } = useWindowDimensions()
    const departments = DEPARTMENTS;

    let deviceWidth = width
    let deviceHeight = height

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => {
                return <MainHeader toggleSettings={toggleSettingNav} exStyle={styles.header} headerTtitleStyle={styles.headerTtitleStyle}
                    headerTitle={'Skolar'} />
            },


        })
    }, [navigation, toggleSideNav])

    // if (deviceWidth > 450) {
    //     return <ScrollView style={landscapeStyle.container}><DashboardL /></ScrollView>
    // }

    const listDept = departments.map((departments) =>
        <DepartmentCard key={departments.id} iconSize={60} deptTitle={departments.name_of_department}
            deptId={departments.id} icon={departments.icon_name} />)

    function toggleSideNav() {
        navigation.toggleDrawer()
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

    // const science = DEPARTMENTS[0]
    // const finance = DEPARTMENTS[1]
    // const art = DEPARTMENTS[2]
    // const trivia = DEPARTMENTS[3]



    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.screen}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../../assets/images/dashboard-bg-image.png')}>

                <SafeAreaView style={styles.screen}>
                    <KeyboardAvoidingView style={styles.screen}>
                        <ScrollView bounces={false} style={styles.screen}>
                            <View style={styles.container}>
                                <SearchBar />
                                <TitleText exStyle={{ fontSize: 40 }}>Choose A
                                    Department</TitleText>
                                <View style={styles.p}>
                                    <TitleText exStyle={{ fontSize: 15, color: '#fff' }}>Select a department that best fit your
                                        field of study.</TitleText>
                                </View>
                                <View style={{ margin: '5%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                                    {listDept}
                                </View>
                                <SettingModal state={settingNav} toggleOff={toggleSettingNav} />

                                <Card />
                            </View>


                            {/* <View style={
                            styles.container
                        }>
                            
                            <SideNavigation toggleSideNav={onSideNav} toggle={toggleSideNav} />

                            <SearchBar /> */}

                            {/* <TitleText exStyle={{ fontSize: 40, marginTop: 20 }} >Choose
                                Department.
                            </TitleText>
                            <ParagraphTexts /> */}

                            {/* departments section */}
                            {/* <ScrollView bounces={false} contentContainerStyle={styles.DeptSectionInnerStyle}
                                style={styles.DeptSection}>
                                <View style={{ flexDirection: 'row' }}>
                                    <DepartmentHolder tappedId={science.id} deptImage={science.icon_name}
                                        deptTitle={science.name_of_department} />

                                    <DepartmentHolder tappedId={finance.id} deptImage={finance.icon_name}
                                        deptTitle={finance.name_of_department} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <DepartmentHolder tappedId={art.id} deptImage={art.icon_name}
                                        deptTitle={art.name_of_department} />

                                    <DepartmentHolder tappedId={trivia.id} deptImage={trivia.icon_name}
                                        deptTitle={trivia.name_of_department} />
                                </View>
                            </ScrollView> */}
                            {/* <View style={styles.serviceArea}><DirectionButton action={prevAction} direction={"keyboard-arrow-left"}
                                size={24} color={'#fff'} /><DashboardActivity
                                    action={goToSelectedActivity.bind(this, activityText)}>
                                    {DashboardActions[counter]}</DashboardActivity>
                                <DirectionButton
                                    direction={"keyboard-arrow-right"}
                                    size={24} color={'#fff'} action={nextAction} />
                            </View> */}

                            {/* </View> */}
                        </ScrollView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>

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
        minWidth: '100%',
        alignItems: 'center',
        paddingHorizontal: '10%',
        paddingVertical: '10%',
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
        fontFamily: 'montserrat-bold',
        width: '100%',
        alignItems: 'flex-start',
        paddingRight: 50,
        paddingTop: 5
    },
    title: {
        color: '#fff',
        fontFamily: 'avenir'
    },
    serviceArea: {
        width: '100%', flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: 50, justifyContent: 'space-between'

    },
    headerTtitleStyle: {
        fontSize: 16,
        letterSpacing: 5,
        textAlign: 'center',
        marginLeft: 20,
        fontFamily: 'catoonist',
        color: '#fff'
    },
    header: { backgroundColor: '#252650' }
});

const landscapeStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'green'
    }
})

