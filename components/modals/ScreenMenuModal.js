
import {
    StyleSheet, View, Pressable, Text
} from 'react-native';
import Modal from 'react-native-modal'
import { MaterialIcons } from "@expo/vector-icons"
import PressableText from '../buttons/PressableText'

function SettingModal({ state, toggleOff, position }) {

    return (
        <Modal style={styles.modal} isVisible={state} onBackdropPress={toggleOff}
            animationIn="slideInRight" animationOut="slideOutRight">

            <View style={styles.container} >
                <View style={{ flexDirection: 'row', margin: 10, width: '100%', alignItems: 'center' }}>
                    <MaterialIcons size={20} name="money" color={'#252650'} /><Text>{' '}</Text>
                    <PressableText exStyle={styles.p}>Support Us</PressableText>
                </View>

                <View style={{ flexDirection: 'row', margin: 10, width: '100%', alignItems: 'space-between' }}>
                    <MaterialIcons size={20} name="logout" color={'#252650'} /><Text>{' '}</Text>
                    <PressableText exStyle={styles.p}>Log Out</PressableText>
                </View>
            </View>
        </Modal>

    )
}

export default SettingModal;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E79C3D',
        alignItems: 'center',
        paddingLeft: 35,
        justifyContent: 'center',
        borderRadius: 10,
        height: '20%',
        width: '50%',
        position: 'absolute',
        top: '10%'
    },
    modal: {
        alignItems: 'flex-end'
    },
    pressed: {
        opacity: 0.8,
        backgroundColor: '#8E5E20'
    },
    p: {
        color: '#252650',
        fontFamily: 'avenir'
    }
});
