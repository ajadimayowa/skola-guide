
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
// import { FavoriteBooksContext } from '../GlobalVariables/context/FavoriteBooks';
import { useContext, useLayoutEffect, useState } from 'react';

function DepartmentBookHolder({ action, id, bookTitle, icon, serial, iconPress }) {
    // const favBookIds = useContext(FavoriteBooksContext)
    // const isFavorite = favBookIds.favBookIds.includes(id)

    // return (
    //     <View style={styles.container}>
    //         <Pressable onPress={action} style={({ pressed }) => pressed ? styles.pressed : null}>
    //             <View style={styles.innerContainer}>
    //                 <Text style={styles.titleText}>{serial}</Text>
    //                 <Text style={styles.titleText}>{bookTitle}</Text>
    //             </View>
    //         </Pressable>
    //         <Pressable onPress={iconPress} style={({ pressed }) => pressed ? styles.pressed : null}>
    //             <Ionicons name={icon} size={25} color={'black'} style={{ marginRight: 30 }} />
    //         </Pressable>
    //     </View>
    // );
}

export default DepartmentBookHolder;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        minWidth: 296,
        minHeight: 65,
        marginVertical: 7,
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '300%',
        alignItems: 'center'
    },
    pressed: {
        opacity: 0.5,
    },
    titleText: {
        color: '#252650',
        fontFamily: 'avenir',
        fontSize: 15,
        fontWeight: "500",
        textAlign: 'left',
        marginLeft: 30
    }
});
