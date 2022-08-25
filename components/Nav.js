import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, View,
} from 'react-native';
import DirectionButton from './DirectionButton';
import ThreeDots from './ThreeDots';

function Nav({ dotAction, arrowAction, externalStyle }) {
    return (
        <View style={[styles.container, externalStyle]}>
            <DirectionButton externalStyle={styles.directionButton} color={'#E79C3D'} size={35} direction={"keyboard-arrow-left"}
                action={arrowAction}
            />
            <ThreeDots action={dotAction} />

        </View>
    );
}

export default Nav;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginBottom: '20%',
        padding: 10

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
        letterSpacing: 5
    },
    directionButton: {
        backgroundColor: null
    }
});
