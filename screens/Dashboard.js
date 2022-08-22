import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView,
    ImageBackground,
    FlatList, KeyboardAvoidingView, ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DashboardHeader from '../components/DashboardHeader';
import SearchBar from '../components/SearchBar';
import TitleText from '../components/TitleText';
import ParagraphTexts from '../components/ParagraphTexts';
import DepartmentHolder from '../components/DepartmentHolder';
import { DEPARTMENTS } from '../data/DataBox'
import { MaterialIcons } from "@expo/vector-icons"

function Dashboard() {
    let image = "science"
    let dept = "SCIENCE"

    function handleDepartmentRender(departments) {
        return <DepartmentHolder deptImage={departments.item.icon_name}
            deptTitle={departments.item.name_of_department} />

    }
    return (
        <LinearGradient colors={['#252650', '#01010B']} style={styles.screen}>
            <ImageBackground style={styles.screen} resizeMode="stretch"
                source={require('../assets/images/dashboard-bg-image.png')}>
                <SafeAreaView style={styles.screen}>
                    <View style={
                        styles.container
                    }>
                        <DashboardHeader />
                        <ScrollView bounces={false} style={{ flex: 1, width: '100%', }}>
                            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, width: '100%', height: '15%', alignItems: 'center' }}>
                                <SearchBar />
                            </KeyboardAvoidingView>
                        </ScrollView>

                        <TitleText />
                        <ParagraphTexts />
                        <View style={{ height: '50%', width: '90%', marginTop: '15%', alignItems: 'center' }}>
                            <FlatList numColumns={2} bounces={false} data={DEPARTMENTS}
                                keyExtractor={(depatments) => depatments.id}
                                renderItem={handleDepartmentRender}
                            />
                        </View>
                    </View>

                </SafeAreaView>

            </ImageBackground>
        </LinearGradient>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '5%'
        // backgroundColor: 'red',
    },
    p: {
        color: '#fff',
        fontFamily: 'montserrat-bold'
    },
    title: {
        color: '#fff',
        fontFamily: 'avenir'
    }
});
