function TabScreens() {
    return (
        <tabs.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <tabs.Screen options={{ tabBarIcon: () => { return <Ionicons name="home" size={30} /> } }} name='HomePage' component={DrawerScreens} />
            <tabs.Screen options={{ tabBarIcon: () => { return <Ionicons name="book" size={30} /> }, headerShown: true }} name='Tutors' component={TutorsScreen} />
            <tabs.Screen options={{ tabBarIcon: () => { return <Ionicons name="heart" size={30} /> }, headerShown: true }} name='Favourites' component={FavouriteBooks} />
        </tabs.Navigator>
    )
} export default TabScreens;