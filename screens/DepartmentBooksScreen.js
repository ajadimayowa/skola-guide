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
import DepartmentBookHolder from '../components/DepartmentBookHolder';
import { Science_Courses } from '../data/DataBox'
import { useState } from 'react';

function DepartmentBooksScreen({ chosenDept }) {
    const [books, setBooks] = useState(Science_Courses)

    function filterBookList(id) {
        const filteredBookList = Science_Courses.filter((presentBooks) => presentBooks.course_id != id)
        setBooks(filteredBookList)

    }
    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.screenDefault}>
            <ImageBackground style={styles.screenDefault} resizeMode="stretch"
                source={require('../assets/images/dashboard-bg-image.png')}>
                <SafeAreaView style={styles.screenDefault}>
                    <View style={styles.container}>
                        <Nav externalStyle={styles.header} />
                        <MaterialIcons name="science" size={50} color="#fff" />
                        <TitleText>Available
                            Science Books.</TitleText>
                        <FlatList contentContainerStyle={styles.listContainerStyle}
                            data={books} renderItem={(books) =>
                                <DepartmentBookHolder action={filterBookList.bind(this, books.item.course_id)} id={books.item.course_id} bookTitle={books.item.course_name} />
                            } style={{ width: '100%' }} />
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
        marginBottom: 30
    },
    listContainerStyle: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 10
    }
});
