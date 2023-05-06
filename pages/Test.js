import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Test() {

    return <View style ={styles.container}><Text style={styles.text}> 테스트 </Text></View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent : "center",
        alignItems :"center",
        backgroundColor: 'white'
    },
    text:{
        color: '#146C94',
        fontSize: 30
    }
})