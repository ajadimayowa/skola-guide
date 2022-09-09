import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, Pressable } from "react-native";
import ParagraphText from "../texts/ParagraphText";
import TitleText from "../texts/TitleText";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from '../../store/redux/slices/favoriteBooksSlice'
import { useEffect } from "react";



function BookDescriptionCard({ exStyle, icon, onPressImage, bookTitle, bookAuthor, bookOwnId, bookCartegoryIds, handleFavorites }) {
    const dispatcher = useDispatch()
    const favoriteBooksList = useSelector((state) => state.favoriteBooks.favoriteBooksList)
    const isFavBook = favoriteBooksList.includes(bookOwnId)



    function manageFav() {
        if (isFavBook) {
            dispatcher(removeFavorite({ id: bookOwnId }))
        }
        else {
            dispatcher(addFavorite({ id: bookOwnId }))
        }
    }

    return (
        <View style={styles.container}>

            <Pressable onPress={onPressImage} style={({ pressed }) => pressed ? [styles.pressed, styles.image] : styles.image}>
                <Image source={require('../../assets/images/book-sample.png')} resizeMode='contain'
                    style={styles.image} />
            </Pressable>

            <View style={styles.descriptionSect}>
                <View style={styles.titleSection}>
                    <View style={styles.bookTitle}><TitleText >{bookTitle}</TitleText></View>

                    <Pressable onPress={manageFav} style={({ pressed }) => pressed ? [styles.pressed, styles.favIcon] : styles.favIcon}>
                        <Ionicons name={isFavBook ? 'heart' : 'heart-outline'} color={'#fff'} size={25} />
                    </Pressable>

                </View>
                <ParagraphText>{bookAuthor}</ParagraphText>
                <ParagraphText>{bookOwnId}</ParagraphText>


            </View>
        </View>
    )

}
export default BookDescriptionCard;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        maxWidth: 255,
        height: 300,
        // backgroundColor: 'yellow'


    },
    pressed: {
        opacity: 0.7
    },
    image: {
        alignItems: 'flex-start',
        maxWidth: 255,
        maxHeight: 150,
        backgroundColor: '#252650',
    },

    descriptionSect: {
        backgroundColor: '#252650',

        padding: 10,
        maxWidth: 255,
        minHeight: 100,
        marginTop: 5
    },

    titleSection: {
        alignItems: 'flex-start',
        flexDirection: 'row'
    },

    rating: {},
    price: {},
    like: {},
    bookTitle: {
        width: '90%',
        // backgroundColor: 'yellow'
    },
    favIcon: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '10%',

    }
})