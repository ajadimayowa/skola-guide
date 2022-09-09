import { useEffect, useState } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground, KeyboardAvoidingView, ScrollView
} from 'react-native';
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
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/redux/slices/favoriteBooksSlice';


function BooksScreen({ navigation, route }) {
    //set values for screen parameters

    //set values for screen Subjects parameters
    const tappedSubjectId = route.params.tappedSubjectId;

    const [screenMenuOff, setScreenMenuOn] = useState(false);
    const subjectAttributes = Subjects.find((subject) => subject.subject_own_id === tappedSubjectId);
    const tappedSubjectTitle = subjectAttributes.subject_name

    //set values for screen Subject parameters
    const filteredBooksBasedOnTappedSubjects = Books.filter((book) => { return book.book_subject_id.includes(tappedSubjectId) })

    const headerTitle = tappedSubjectTitle + ' Books';

    //set initial state value for favorite books
    function manageFavorites(ids) {
        const isFavoriteBook = favoriteBooksList.includes(id)
        console.log(isFavoriteBook)
    }

    const listFilteredBooks = filteredBooksBasedOnTappedSubjects.map((book) => {
        const bookId = book.book_own_id;
        // console.log(bookId)
        return <BookDescriptionCard bookOwnId={bookId} key={bookId}
            bookTitle={book.book_name} bookAuthor={book.book_author} />
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
    function goToBookDetails(booKId) {
        console.log('ready :', booKId)
    }

    // const filteredBookList = filteredBooksBasedOnTappedSubjects.map((book) => {

    //     const favoriteList = favoritebooks
    //     const bookOwnId = book.book_own_id

    //     const isFav = favoriteList.includes(bookOwnId)

    //     const iconName = isFav ? 'heart' : 'heart-outline';

    //     function manageFavorites() {
    //         if (isFav) {
    //             dispatch(removeFavorite({ id: bookOwnId }))

    //         } else {
    //             dispatch(addFavorite({ id: bookOwnId }))
    //         }
    //     }

    //     return <BookDescriptionCard icon={iconName} handleFavorites={manageFavorites} onPressImage={goToBookDetails.bind(this, book.book_own_id)} bookOwnId={book.book_own_id} key={book.book_own_id} bookTitle={book.book_name} bookAuthor={book.book_author} />
    // })



    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.screen}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../../assets/images/dashboard-bg-image.png')}>

                <SafeAreaView style={styles.screen}>
                    <KeyboardAvoidingView style={styles.screen}>
                        <ScrollView style={styles.screen}>

                            <View style={styles.container}>
                                <TitleText exStyle={styles.titleText}>{tappedSubjectTitle} Books.</TitleText>
                                <ScrollView horizontal={true}
                                    style={styles.horizontalScrollOuter} contentContainerStyle={styles.horizontalScrollInner} >
                                    {listFilteredBooks}
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

export default BooksScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        width: '100%',
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

    },
    horizontalScrollInner: {

    }
});
