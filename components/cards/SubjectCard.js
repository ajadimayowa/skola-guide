
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { useContext, useLayoutEffect, useState } from 'react';

function PressableCard({ children, exStyle }) {

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={[styles.innerContainer, exStyle]}>
                    {children}
                </View>
            </Pressable>
        </View>
    );
}

export default PressableCard;

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 10,

    },
    innerContainer: {
        minWidth: 170,
        minHeight: 125,
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        shadowColor: 'black',
        padding: 10,
        shadowRadius: 5,
        shadowOffset: { height: 1, width: 1 }
    },
    pressed: {
        opacity: 0.5,
    },
});
