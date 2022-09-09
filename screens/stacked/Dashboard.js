import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView, ImageBackground, useWindowDimensions,
    ScrollView, KeyboardAvoidingView
} from 'react-native';

import { useLayoutEffect, useState } from 'react';
import BooksHorizontalList from '../../components/lists/BooksHorizontalList';
import { LinearGradient } from 'expo-linear-gradient';
import SettingModal from '../../components/modals/SettingModal'
import TitleText from '../../components/texts/TitleText';
import { DEPARTMENTS } from '../../data/Departments'
import { DashboardActions } from '../../data/DataBox'
import MainHeader from '../../components/main/MainHeader';
import SearchBar from '../../components/inputs/SearchBar';
import Card from '../../components/cards/Card';
import DepartmentCard from '../../components/cards/DepartmentCard';
import { Books } from '../../data/Books';

//importing the data for use from redux

function Dashboard({ navigation }) {

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

                                <TitleText>Popurla Books</TitleText>
                                <BooksHorizontalList data={Books} />
                                <TitleText>Available Tutors</TitleText>
                                <BooksHorizontalList data={Books} />
                            </View>



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
        paddingHorizontal: '3%',
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

