// import React, { useState, useEffect, Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import axios from "axios"

// const WALKAPI_URL = "http://openapi.seoul.go.kr:8088/435a6477486a756e313135706f4c6e73/json/walkDulaeInfo/1/5/"
// const SEOUL_REALTIME_URL = "http://openapi.seoul.go.kr:8088/435a6477486a756e313135706f4c6e73/xml/citydata/1/5/광화문·덕수궁"

// const API_KEY = "435a6477486a756e313135706f4c6e73"


// export default function Datas() {

//     const axios = require('axios');
//     const getData = async() => {
//         try {
//           //응답 성공
//           const response = await axios.get(WALKAPI_URL);
//           console.log(response)
//         } catch (error) {
//           //응답 실패
//           console.error(error);
//         }
//       }

//     return <View style ={styles.container}><Text style={styles.text}>HOLA</Text></View>
// }
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent : "center",
//         alignItems :"center",
//         backgroundColor: '#B0DAFF'
//     },
//     text:{
//         color: '#146C94',
//         fontSize: 30
//     }
// })