
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { useContext, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function SubjectCapsule({ children, exStyle, onPress, subjectId }) {
    const tappedSubjectId = subjectId

    const navigation = useNavigation()


    function goToTappedSubjectBooks() {
        navigation.navigate('BooksScreen', { tappedSubjectId })
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={goToTappedSubjectBooks} style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={[styles.innerContainer, exStyle]}>
                    <Text style={styles.buttonTItle}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default SubjectCapsule;

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#E79C3D',
        margin: 5,
        borderRadius: 20,
        minWidth: 150,
        maxHeight: 45,
        justifyContent: 'center',


    },
    innerContainer: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { height: 1, width: 1 }
    },
    pressed: {
        opacity: 0.7,
    },
    buttonTItle: {
        fontWeight: '300',
        fontFamily: 'montserrat-semi-bold'
    }
});
