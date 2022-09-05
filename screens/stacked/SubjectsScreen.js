import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground,
    FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'
// import TitleText from '../../components/TitleText';
import Nav from '../../components/Nav';
import Hamburger from '../../components/Hamburger';
import DepartmentBookHolder from '../../components/DepartmentBookHolder';

import { All_Books } from '../../data/DataBox'
import { DEPARTMENTS } from '../../data/DataBox'

import { useState, useLayoutEffect, useEffect, useContext } from 'react';
import DirectionButton from '../../components/DirectionButton';



function DepartmentBooksScreen({ navigation, route }) {

    const tappedDepartmentId = route.params.id


    const tappedDeptIconImage = DEPARTMENTS.find((depts) => { return depts.id === tappedDepartmentId }).icon_name
    const tappedDeptTitle = DEPARTMENTS.find((depts) => { return depts.id === tappedDepartmentId }).name_of_department
    const filteredBooks = All_Books.filter((books) => { return books.course_id.indexOf(tappedDepartmentId) >= 0 })
    const bookId = filteredBooks.find((book) => book.course_id.indexOf(tappedDepartmentId) >= 0).course_own_id

    const isFavorite = favoriteListId.includes(bookId)
    const iconName = isFavorite ? 'heart' : 'heart-outline'

    function goBack() {
        console.log('ok')
    }

    function handleFavoriteList() {
        if (isFavorite) {
            favoriteListManager.remFavBook(bookId)
        } else {
            favoriteListManager.addFavBook(bookId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => <Nav arrowAction={goBack} />
        })
    }, [navigation])


    // return (
    //     <LinearGradient colors={['#252650', '#01010B']} style={styles.screenDefault}>
    //         <ImageBackground style={styles.screen} resizeMode="stretch"
    //             source={require('../../assets/images/dashboard-bg-image.png')}>
    //             <SafeAreaView style={styles.screenDefault}>
    //                 <View style={styles.container}>
    //                     <View style={{ width: '100%' }}>
    //                         <MaterialIcons name={tappedDeptIconImage} size={50} color="#fff" />
    //                         <TitleText>Available</TitleText>
    //                         <TitleText>
    //                             {tappedDeptTitle} Books.</TitleText>
    //                     </View>
    //                     <View style={{ maxHeight: 400, width: '100%', marginTop: 10, alignItems: 'flex-start' }}>
    //                         <FlatList contentContainerStyle={styles.listContainerStyle}
    //                             data={filteredBooks} renderItem={(books) =>
    //                                 <DepartmentBookHolder iconPress={handleFavoriteList} icon={iconName} serial={books.index + 1} holderColor={books.item.color_code}
    //                                     id={books.item.course_own_id}
    //                                     bookTitle={books.item.course_name} />
    //                             } style={{ width: '100%' }} />
    //                     </View>
    //                 </View>
    //                 <View style={{ width: '100%', alignItems: 'flex-end', paddingHorizontal: '15%' }}>
    //                     <DirectionButton color={'#fff'} size={24}
    //                         direction={'add'} externalStyle={{ backgroundColor: '#E79C3D' }} />
    //                 </View>

    //             </SafeAreaView>
    //         </ImageBackground>
    //     </LinearGradient>
    // )
};


export default DepartmentBooksScreen;

const styles = StyleSheet.create({
    screenDefault: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    container: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 50,
        paddingVertical: 40,
        // backgroundColor: 'red',
        minHeight: 600

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
