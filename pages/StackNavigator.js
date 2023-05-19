// import React, { useState, useEffect, Component } from 'react';
// import { Dimensions, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { StackNavigator } from '@react-navigator';
// import { createStackNavigator } from '@react-navigation/stack';
// // import Mainpage from './pages/Mainpage.js'
// // import Detailpage from './pages/Detailpage.js'
// // import Mappage from './pages/Mappage.js'
// // import Searchpage from './pages/Searchpage.js';


// // function Mainpage({ navigation }) {
// // return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //     <Button title="Mainpage로"
// //         onPress={() => navigation.navigate('Profile')}/>
// //     </View>
// // );
// // }

// // function Category({ navigation }) {
// // return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //     <Button title="Category로"
// //         onPress={() => navigation.navigate('Notifications')}/>
// //     <Button title="뒤로가기" onPress={() => navigation.goBack()} />
// //     </View>
// // );
// // }

// // function Detailpage({ navigation }) {
// // return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Button title="Detailpage로"
// //         onPress={() => navigation.navigate('Settings')}/>
// //     <Button title="뒤로가기" onPress={() => navigation.goBack()} />
// //     </View>
// // );
// // }

// // function Mappage({ navigation }) {
// // return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Button title="Mappage로"
// //         onPress={() => navigation.navigate('Settings')}/>
// //     <Button title="뒤로가기" onPress={() => navigation.goBack()} />
// //     </View>
// // );
// // }



// // function Searchpage({ navigation }) {
// // return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Button title="Searchpage로"
// //         onPress={() => navigation.navigate('Settings')}/>
// //     <Button title="뒤로가기" onPress={() => navigation.goBack()} />
// //     </View>
// // );
// // }

// const Stack = createStackNavigator();

// const MyStack = () => {
// return (
//     <Stack.Navigator
//     screenOptions={{
//         headerStyle: {
//             backgroundColor: "black",
//             borderBottomColor: "black",
//             shadowColor: "black",
//             height:100
//         },
//         headerTintColor: "#FFFFFF",
//         headerBackTitleVisible: false
//     }}>
//         <Stack.Screen name="Mainpage" component={Mainpage} />
//         <Stack.Screen name="Category" component={Category} />
//         <Stack.Screen name="Detailpage" component={Detailpage} />
//         <Stack.Screen name="Mappage" component={Mappage} />
//         <Stack.Screen name="Searchpage" component={Searchpage} />
//     </Stack.Navigator>
// );
// }
// export default MyStack;