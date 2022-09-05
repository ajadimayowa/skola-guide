import {
    StyleSheet, Text, View, TextInput, Pressable
} from 'react-native';
import { Feather } from "@expo/vector-icons"
import { useState } from 'react';

function SearchBar({ catchuserInput, action }) {
    const [userInput, setUserInput] = useState()

    function catchUserInput(userinput) {
        setUserInput(userinput)
    }
    function passUserInput() {
        console.log(userInput)
        setUserInput()
    }
    return (<>
        <View style={styles.holder}>
            <TextInput autoCorrect={false} placeholder='Search books'
                style={styles.searchBox} value={userInput} onChangeText={catchUserInput} />

            <Pressable onPress={passUserInput} style={({ pressed }) => pressed ?
                [styles.pressedIcon, styles.icon] : [styles.icon]}>
                <Feather name="search" color={'#fff'} size={25} />
            </Pressable>
        </View>

    </>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    searchBox: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 20,
        padding: 15,
        margin: 5,
        minWidth: 250,
        minheight: 45,
        fontFamily: 'avenir',
        fontSize: 12,
        borderRadius: 5,

    },
    holder: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '15%'
    },
    icon: {
        color: '#E79C3D'
    },
    pressedIcon: {
        opacity: 0.8
    },
});
