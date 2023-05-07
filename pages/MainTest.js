import React, { useState, useEffect, Component } from 'react';
import { Dimensions, TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


//아이콘 가져오기
//날씨
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//이미지 불러오기
import cafe from '../assets/cafe.jpg';


//그라데이션 적용할 사이즈
const screenWidth = Dimensions.get('window').width

export default function MainTest() {
    //스크린 사이즈에 맞게 설정

    return (

    <View style ={styles.container}>
        
        <ImageBackground source={cafe} style={styles.image}>
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent','transparent','rgba(0,0,0,0.8)']} style={styles.background}>
        <View style={styles.header}>
            <View style={styles.headercontent01}><Text style={styles.texttitle}>걸어요, 서울</Text></View>
            <View style={styles.headercontent02}><Text style={styles.textweather}>16 °C</Text></View>
            <View style={styles.weatherArea}><MaterialCommunityIcons name="weather-cloudy" size ={36} color={'white'}/></View></View>
        <View style={styles.title}>
            <View style={styles.Content01}><Text style={styles.text}>오늘의 추천 산책로</Text></View></View>
        <View style={styles.Content}></View>
        {/** 아이콘 들 */}
        <View style={styles.footer}>
            <TouchableOpacity>
                <Foundation name="list" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="location-outline" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="home" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="search" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="heart" size={30} color="white" />
            </TouchableOpacity>
        </View>
        </LinearGradient>
        </ImageBackground>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor :'yellow',
        height:screenWidth
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%' 
    },
    image: {
        resizeMode: 'cover',
        justifyContent: 'center',
        height: '100%'
    },
    header:{
        flex:1,
        marginTop:10,
        flexDirection:'row',
    },
    
    headercontent01:{
        flex:3,
        marginLeft:30,
    },
    texttitle:{
        fontSize:25,
        fontWeight: 'bold',
        color:'white'
    },
    textweather:{
        fontSize:20,
        fontWeight: 'bold',
        color:'white'
    },
    headercontent02:{
        flex:1,
        marginTop:6,
        alignItems:'flex-end',
        marginRight:10
    },
    weatherArea:{
        flex:0.5,
        alignContent:'flex-end',
        marginRight:30
    },
    title:{
        flex:11,
        justifyContent:'flex-end',
    },
    Content01:{
        flex:0.1,
        alignItems:'flex-end',
        justifyContent:'center',
        marginRight:10,
    },
    Content:{
        flex:0.05,
        margin:8,
        backgroundColor:'white'
    },
    footer:{
        flex:1,
        flexDirection:"row",
        margin:9,
        marginLeft:30,
        marginRight:30,
        justifyContent:"space-between",
    },
    
    text:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
})