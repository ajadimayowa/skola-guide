
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { useContext, useLayoutEffect, useState } from 'react';

function Card({ onPress, id, title, icon, iconSize, iconColor, exStyleText, cardTitle }) {

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={styles.innerContainer}>
                    <Ionicons name={icon} size={iconSize} color={iconColor} />
                    <Text style={[styles.titleText, exStyleText]}>{cardTitle}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 10,

    },
    innerContainer: {

        flexDirection: 'row',
        borderRadius: 5,
        minWidth: 300,
        minHeight: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { height: 1, width: 1 }
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
