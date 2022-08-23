
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, View, Pressable, Text
} from 'react-native';
import Modal from 'react-native-modal'
import { MaterialIcons } from "@expo/vector-icons"
import Hamburger from './Hamburger';

function SideNavigation({ toggleSideNav, toggle }) {

    return (
        <Modal isVisible={toggleSideNav} onBackdropPress={toggle}
            animationIn={"slideInLeft"} animationOut={"slideOutLeft"}>

            <View style={styles.container} >
                <Text style={styles.p}>Side Bar</Text>
            </View>
        </Modal>

    );
}

export default SideNavigation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E79C3D',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        borderRadius: 17,
        height: '50%',
        width: '50%'
    },
    pressed: {
        opacity: 0.8,
        backgroundColor: '#8E5E20'
    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    }
});
