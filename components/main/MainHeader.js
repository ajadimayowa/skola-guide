import { View, Text, StyleSheet } from "react-native";
import DirectionButtonIonicon from '../buttons/DirectionButtonIonicon';
import DrawerToggleButton from '../buttons/DrawerToggleButton';


function MainHeader({ exStyle, toggleSettings, onPress, icon, headerTtitleStyle, headerTitle }) {
    return (
        <View style={[styles.header, exStyle]}>
            <DrawerToggleButton iconColor={'#fff'} iconSize={12} icon={'nav-icon-a'} /><Text style={[styles.title, headerTtitleStyle]}>{headerTitle}
            </Text>
            <DirectionButtonIonicon onPress={toggleSettings} exStyle={{ backgroundColor: null }} iconColor={'#E79C3D'} iconSize={25} icon={'settings'} />
        </View>
    )
}

export default MainHeader;

const styles = StyleSheet.create({
    header: {
        minWidth: '100%',
        flexDirection: 'row',
        minHeight: '15%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '12%',
        padding: '2%'


    },
    title: {
        fontWeight: '600'
    }

})