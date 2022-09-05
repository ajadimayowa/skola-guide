import {
    StyleSheet, Text
} from 'react-native';

function TitleText({ children, exStyle }) {
    return (

        <Text style={[styles.titleText, exStyle]}>{children}</Text>
    );
}

export default TitleText;

const styles = StyleSheet.create({
    titleText: {
        color: '#E79C3D',
        fontFamily: 'avenir',
        fontSize: 20,
        width: '100%',
    }
});
