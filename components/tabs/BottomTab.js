import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"
function BottomTab({ icon1, icon2, icon3 }) {
    return (
        <View style={styles.container}>
            <View style={{ borderRadius: '50%', padding: 10, borderWidth: 1, borderColor: '#252650' }}>
                <Ionicons name={icon1} size={30} color={'#252650'} />
                <Text>hidden</Text>
            </View>
            <View style={{ borderRadius: '50%', padding: 10, borderWidth: 1, borderColor: '#252650' }}>
                <Ionicons name={icon2} size={30} color={'#252650'} />
            </View>
            <View style={{ borderRadius: '50%', padding: 10, borderWidth: 1, borderColor: '#252650' }}>
                <Ionicons name={icon3} size={30} color={'#252650'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        backgroundColor: 'red',
        borderTopLeftRadius: 60,
        borderBottomRightRadius: 60,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default BottomTab;