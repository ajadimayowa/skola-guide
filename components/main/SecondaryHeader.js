import { View, Text, StyleSheet } from "react-native";
import BackButton from '../../components/buttons/BackButton';
import ScreenMenuToggler from '../../components/buttons/ScreenMenuToggler';
import { Platform } from "react-native";


function SecondaryHeader({ exStyle, toggleMenu, onPress, icon, headerTtitleStyle, headerTitle }) {
    const backButton = Platform.select({ android: 'md-arrow-back-sharp', ios: 'ios-chevron-back' })
    return (
        <View style={[styles.header, exStyle]}>
            <BackButton exStyle={{ backgroundColor: null }} iconSize={25}
                iconColor={'#E79C3D'} icon={backButton} />
            <Text style={[styles.title, headerTtitleStyle]}>{headerTitle}
            </Text>
            <ScreenMenuToggler onPress={toggleMenu} exStyle={{ backgroundColor: null }} iconSize={25}
                iconColor={'#E79C3D'} icon={'dots-three-horizontal'} />
        </View>
    )
}

export default SecondaryHeader;

const styles = StyleSheet.create({
    header: {
        minWidth: '100%',
        flexDirection: 'row',
        minHeight: '15%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '12%',

    },
    title: {
        fontWeight: '700',
        color: '#E79C3D',
        fontFamily: 'montserrat-semi-bold'
    }

})