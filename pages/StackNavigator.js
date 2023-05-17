// import React, { useState, useEffect, Component } from 'react';
// import { Dimensions, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { StackNavigator } from '@react-navigator';
// import Mainpage from "../assets/icons/Mainpage.png"
// import Category from "../assets/icons/Category.png"
// import Mappage from "../assets/icons/Mappage.png"
// import Detailpage from "../assets/icons/Detailpage.png"
// import Searchpage from "../assets/icons/Searchpage.png"
// import MainHubo from "../assets/icons/MainHubo.png"

// function Mainpage({ navigation }) {
// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Button title="Mainpage로"
//         onPress={() => navigation.navigate('Profile')}/>
//     </View>
// );
// }

// function Category({ navigation }) {
// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Button title="Category로"
//         onPress={() => navigation.navigate('Notifications')}/>
//     <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
// );
// }

// function Detailpage({ navigation }) {
// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button title="Detailpage로"
//         onPress={() => navigation.navigate('Settings')}/>
//     <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
// );
// }

// function Mappage({ navigation }) {
// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button title="Mappage로"
//         onPress={() => navigation.navigate('Settings')}/>
//     <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
// );
// }

// function MainHubo({ navigation }) {
// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button title="MainHubo로"
//         onPress={() => navigation.navigate('Settings')}/>
//     <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
// );
// }

// function Searchpage({ navigation }) {
// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button title="Searchpage로"
//         onPress={() => navigation.navigate('Settings')}/>
//     <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
// );
// }

// const Stack = createStackNavigator();

// function MyStack() {
// return (
//     <Stack.Navigator>
//     <Stack.Screen name="Mainpage" component={MainpageScreen} />
//     <Stack.Screen name="Category" component={CategoryScreen} />
//     <Stack.Screen name="Detailpage" component={DetailpageScreen} />
//     <Stack.Screen name="MainHubo" component={MainHuboScreen} />
// 	<Stack.Screen name="Mappage" component={MappageScreen} />
// 	<Stack.Screen name="Searchpage" component={SearchpageeScreen} />
//     </Stack.Navigator>
// );
// }

// export default function App() {
    
// return (
//     <NavigationContainer>
//     <MyStack />
//     </NavigationContainer>
// );
// }