import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, View, Text
} from 'react-native';
import DirectionButton from './DirectionButton';
import ThreeDots from './ThreeDots';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

function Nav({ dotAction, arrowAction, externalStyle, pageTitle }) {
    const navigation = useNavigation()

    function goBack() {
        navigation.goBack()
    }

    return (
        <View style={[styles.container, externalStyle]}>
            <DirectionButton action={goBack} externalStyle={styles.directionButton} color={'#E79C3D'} size={35}
                direction={"keyboard-arrow-left"}
            />
            <Text style={styles.titleText}>{pageTitle}</Text>
            <ThreeDots action={dotAction} />

        </View>
    );
}

export default Nav;

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: 110,
        paddingBottom: 20,
        backgroundColor: '#252650'

    },
    icon: {
        color: '#E79C3D'
    },
    pressedIcon: {
        opacity: 0.8
    },
    pressed: {
        opacity: 0.8,
        backgroundColor: '#8E5E20',
        overflow: 'hidden'
    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    },
    titleText: {
        color: '#fff',
        fontFamily: 'catoonist',
        fontSize: 16,
        letterSpacing: 5,
        color: '#E79C3D'
    },
    directionButton: {
        backgroundColor: null
    }
});
