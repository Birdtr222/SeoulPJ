import React, { useState, useEffect, Component } from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';


//아이콘 가져오기
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


//상단 길이 고정
const screenWidth = Dimensions.get('window').width


export default function Searchpage() {
    //스크린 사이즈에 맞게 설정

    return (
    <View style ={styles.container}>    
        <View style={styles.header}><MaterialCommunityIcons name="weather-pouring" size={120} color="black" />
        <Text style={styles.text}> 현재온도: 16 °C</Text>
        <Text>체감온도: 16 °C 습도 73% 동풍 1m/s</Text>
        <Text>미세먼지: 좋음 초미세먼지: 좋음 자외선: 좋음</Text>
        </View>
        <Text style={styles.textTag}>태그 검색</Text>
        <View style={styles.Content01}>
            <TouchableOpacity>
            <FontAwesome5 name="search" size={30} color="black" margin={10}/>
            </TouchableOpacity>
            </View>
        <View style={styles.Content02}>
        <ScrollView>
            <Text>이곳은 위아래 스크롤 뷰 입니다. 검색 전 초기 데이터들 그냥 일부분 보여줄 수 있는 곳이에요. 가이드라인만 잡고 있는 중입니다.. 아직 세팅은 하지 않았어요...가이드라인 사진은 이미지로 보여드릴게요 유후링..</Text>
        </ScrollView>
        </View>
        {/** 아이콘 들 */}
        <View style={styles.footer}>
            <TouchableOpacity>
                <Foundation name="list" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="location-outline" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="home" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="search" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="heart" size={30} color="black" />
            </TouchableOpacity>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        flex:1,
        height:screenWidth
    },
    header:{
        flex:4,
        margin:10,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor :'#7FCBF5',
        borderRadius:40
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    textTag: {
        fontSize: 20,
        marginLeft:20,
        fontWeight: 'bold'
    },
    Content01:{
        flex:1,
        margin:10,
        alignContent:'flex-end',
        alignItems:'flex-end',
        justifyContent:'center',
        borderRadius:40,
        borderWidth:3,
        borderColor:'black'
    },
    Content02:{
        flex:4,
        margin:10,
        backgroundColor:'purple'
    },
    footer:{
        flex:1,
        flexDirection:"row",
        margin:9,
        marginLeft:30,
        marginRight:30,
        justifyContent:"space-between",
    },
    

})