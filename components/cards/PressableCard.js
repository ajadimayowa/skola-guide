
import {
    StyleSheet, Text, View, Image, Pressable
} from 'react-native';
import { Fontisto } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { useContext, useLayoutEffect, useState, } from 'react';
import { useNavigation } from '@react-navigation/native';

function PressableCard({ children, onPress, exStyle }) {
    return (
        <View style={[styles.container, exStyle]}>
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
        backgroundColor: 'blue',
    },
    innerContainer: {
        alignItems: 'flex-start',
        backgroundColor: 'red',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { height: 1, width: 1 }
    },
    pressed: {
        opacity: 0.5,
    },
});
