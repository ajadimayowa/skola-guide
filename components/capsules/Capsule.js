
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { useContext, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function SubjectCapsule({ children, exStyle, onPress, subjectId }) {
    const navigation = useNavigation()
    const tappedSubjectId = subjectId

    function goToTappedSubjectBooks() {
        navigation.navigate('BooksScreen', { tappedSubjectId })
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={goToTappedSubjectBooks} style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={[styles.innerContainer, exStyle]}>
                    {children}
                </View>
            </Pressable>
        </View>
    );
}

export default SubjectCapsule;

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 10,

    },
    innerContainer: {
        minWidth: 150,
        minHeight: 40,
        borderRadius: 25,
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        shadowColor: 'black',
        padding: 20,
        shadowRadius: 5,
        shadowOffset: { height: 1, width: 1 }
    },
    pressed: {
        opacity: 0.5,
    },
});
