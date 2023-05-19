import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
    return <View style ={styles.container}><Text style={styles.text}> 잠시만 기다려주세요... </Text></View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent : "center",
        alignItems :"center",
        backgroundColor: '#B0DAFF'
    },
    text:{
        color: '#146C94',
        fontSize: 30
    }
})