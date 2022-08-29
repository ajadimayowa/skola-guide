import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground,
    FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'
import TitleText from '../components/TitleText';
import Nav from '../components/Nav';
import Hamburger from '../components/Hamburger';
import DepartmentBookHolder from '../components/DepartmentBookHolder';

import { All_Books } from '../data/DataBox'
import { DEPARTMENTS } from '../data/DataBox'

import { useState, useLayoutEffect } from 'react';
import DirectionButton from '../components/DirectionButton';

function DepartmentBooksScreen({ navigation, route }) {
    const { tappedDept, tappedDeptImage, tappedDeptId } = route.params

    const tappedDeptTitle = tappedDept
    const tappedDeptIconImage = tappedDeptImage
    const tappedCategoryId = tappedDeptId

    useLayoutEffect(() => {
        const headerTitle = DEPARTMENTS.find((allDept) =>
            allDept.id === tappedCategoryId).name_of_department

        navigation.setOptions({
            header: () => <Nav pageTitle={tappedDeptTitle} />
        })
    }, [tappedCategoryId, navigation])


    const [books, setBooks] = useState(All_Books)

    const filteredBooks = books.filter((allBooks) => {
        return allBooks.course_id.indexOf(tappedCategoryId) >= 0
    })

    // useEffect(() => {
    //     if (tappedDeptTitle === 'Trivia') {
    //         setBooks(Trivia_Courses)
    //     }
    //     if (tappedDeptTitle === 'Science') {
    //         setBooks(Science_Courses)
    //     }
    //     if (tappedDeptTitle === 'Finance') {
    //         setBooks(Finance_Courses)
    //     }
    //     if (tappedDeptTitle === 'Art') {
    //         setBooks(Art_Courses)
    //     }
    // }, [tappedDeptTitle, books])




    function goBack() {
        navigation.goBack()
    }

    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.screenDefault}>
            <ImageBackground style={styles.screenDefault} resizeMode="stretch"
                source={require('../assets/images/dashboard-bg-image.png')}>
                <SafeAreaView style={styles.screenDefault}>
                    <View style={styles.container}>

                        <MaterialIcons name={tappedDeptIconImage} size={50} color="#fff" />
                        <TitleText>Available
                            {' '}{tappedDeptTitle} Books.</TitleText>
                        <FlatList contentContainerStyle={styles.listContainerStyle}
                            data={filteredBooks} renderItem={(books) =>
                                <DepartmentBookHolder serial={books.index + 1} holderColor={books.item.color_code} id={books.item.course_id}
                                    bookTitle={books.item.course_name} />
                            } style={{ width: '100%' }} />
                        <View style={{ width: '100%', alignItems: 'flex-end', paddingHorizontal: '10%', marginTop: 15 }}>
                            <DirectionButton color={'#fff'} size={24}
                                direction={'add'} externalStyle={{ backgroundColor: '#E79C3D' }} />
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    )
};


export default DepartmentBooksScreen;

const styles = StyleSheet.create({
    screenDefault: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20

    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    },
    header: {
        marginBottom: 20
    },
    listContainerStyle: {
        width: '100%',

        justifyContent: 'flex-start',
        marginTop: 10
    }
});
