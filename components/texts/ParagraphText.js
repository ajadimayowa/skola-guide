import {
    StyleSheet, Text
} from 'react-native';

function ParagraphText({ children, exStyle }) {
    return (

        <Text style={[styles.paragraphText, exStyle]}>{children}</Text>
    );
}

export default ParagraphText;

const styles = StyleSheet.create({
    paragraphText: {
        color: '#fff',
        fontFamily: 'montserrat-semi-bold',
        fontSize: 14,
        width: '100%',
        // backgroundColor: 'red'
    }
});
