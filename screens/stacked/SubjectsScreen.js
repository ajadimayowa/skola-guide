import { useState } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground, KeyboardAvoidingView, ScrollView
} from 'react-native';
import { DEPARTMENTS } from '../../data/Departments';
import { Subjects } from '../../data/Subjects';
import { Books } from '../../data/Books'
import { LinearGradient } from 'expo-linear-gradient';
import { useLayoutEffect } from 'react';
import SecondaryHeader from '../../components/main/SecondaryHeader';
import SettingModal from '../../components/modals/SettingModal';
import { MaterialIcons } from '@expo/vector-icons';
import TitleText from '../../components/texts/TitleText';
import SubjectCapsule from '../../components/capsules/SubjectCapsule';
import BookDescriptionCard from '../../components/cards/BookDescriptionCard';


function SubjectsScreen({ navigation, route }) {
    //set values for screen parameters

    //set values for screen Dept parameters
    const tappedDeptId = route.params.id;

    const [screenMenuOff, setScreenMenuOn] = useState(false);
    const departmentAttributes = DEPARTMENTS.find((depatments) => depatments.id === tappedDeptId);
    const tappedDeptTitle = departmentAttributes.name_of_department;
    const tappedDeptIcon = departmentAttributes.icon_name;

    //set values for screen Subject parameters


    const headerTitle = tappedDeptTitle + ' Subjects';

    const filteredSubjectsBasedOnTappedDept = Subjects.filter((subjects) => {
        return subjects.subject_id.includes(tappedDeptId)
    })

    function toggleScreenMenu() {
        setScreenMenuOn(!screenMenuOff)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => { return <SecondaryHeader headerTitle={headerTitle} toggleMenu={toggleScreenMenu} exStyle={styles.header} /> },
            headerShown: true,
            tabBarShown: false

        })
    })

    const subjectList = filteredSubjectsBasedOnTappedDept.map((subject) => {
        // console.log(subject.subject_own_id)
        return <SubjectCapsule key={subject.subject_own_id} subjectId={subject.subject_own_id} subjectCatId={subject.subject_id} >
            {subject.subject_name}</SubjectCapsule>
    })


    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.screen}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../../assets/images/dashboard-bg-image.png')}>

                <SafeAreaView style={styles.screen}>
                    <KeyboardAvoidingView style={styles.screen}>
                        <ScrollView style={styles.screen}>

                            <View style={styles.container}>
                                <MaterialIcons style={styles.icon} name={tappedDeptIcon} size={40} color={'#fff'} />
                                <SettingModal toggleOff={toggleScreenMenu} state={screenMenuOff} />
                                <TitleText exStyle={styles.titleText}>Available</TitleText>
                                <TitleText exStyle={styles.titleText}>{tappedDeptTitle} Subjects.</TitleText>
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.horizontalScrollOuter} contentContainerStyle={styles.horizontalScrollInner} >
                                    {subjectList}
                                </ScrollView>
                                <View style={{ marginTop: 30 }}>
                                    <TitleText exStyle={{ fontSize: 20 }}>Recomended Books</TitleText>
                                    <BookDescriptionCard />
                                </View>
                            </View>

                        </ScrollView>

                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

export default SubjectsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        minWidth: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '10%',
    },
    titleText: {
        fontSize: 30
    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    },
    header: {
        backgroundColor: '#252650'
    },
    icon: {
        marginBottom: 10
    },
    horizontalScrollOuter: {
        paddingHorizontal: 30,
        width: '130%',
        alignSelf: 'center'
    },
    horizontalScrollInner: {
        width: '150%',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        flexGrow: true,
        height: '100%',
        padding: 10,
    }
});
