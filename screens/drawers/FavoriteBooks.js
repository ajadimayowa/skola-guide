import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground, FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


function FavouriteBooks({ navigation }){
    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.container}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../../assets/images/dashboard-bg-image.png')}>


                <SafeAreaView style={styles.container}>


                    <FlatList />

                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

  

export default FavouriteBooks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,

    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    }
})

// // useLayoutEffect(() => {
    // //     navigation.setOptions({
    // //         drawerIcon: ({ color, size }) => <Ionicons name={"heart"} color={'#fff'} size={size} />
    // //     })
    // // }, [navigation])

    // function handleListRender(books) {
    //     //     return (
    //     //         <DepartmentBookHolder bookTitle={books.item.course_name} />
    //     //     )
    //     // }

    //     // if (favBooks.length === 0) {
    //     //     return (
    //     //         <Text style={styles.p}>No Favorite Books Added</Text>
    //     //     )
    //     // }

       
    // }
