import { View, FlatList, StyleSheet } from 'react-native'
import DepartmentBookHolder from './DepartmentBookHolder';
function ListRender({ ArrayData, renderMethod }) {
    return (
        <View style={styles.container}>

        </View>
    )
} export default ListRender;

const styles = StyleSheet.create({
    container: {
        maxHeight: 400,
        width: '100%',
        marginTop: 10,
        alignItems: 'flex-start',
        padding: 20
    },

    listContainerStyle: {
        width: '100%',
        justifyContent: 'flex-start',
        marginTop: 10
    }
})

