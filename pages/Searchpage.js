import React, { useState, useEffect, Component } from 'react';
import { TextInput, Alert, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';
import * as Location from "expo-location"


//아이콘 가져오기
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


//상단 길이 고정
const screenWidth = Dimensions.get('window').width


export default function Searchpage ({navigation,route}) {

    //useState 사용법
	//[state,setState] 에서 state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
  //setState는 state를 변경시킬때 사용해야하는 함수
  //날씨 데이터 상태관리 상태 생성!
  const [weather, setWeather] = useState({
    temp : 0,
    condition : ''
  })



  const getLocation = async () => {
    //수많은 로직중에 에러가 발생하면
    //해당 에러를 포착하여 로직을 멈추고,에러를 해결하기 위한 catch 영역 로직이 실행
    try {
      //자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
      await Location.requestForegroundPermissionsAsync();
      const locationData= await Location.getCurrentPositionAsync();
      const latitude = locationData['coords']['latitude']
      const longitude = locationData['coords']['longitude']
      const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      const temp = result.data.main.temp; 
      const condition = result.data.weather[0].main

      //오랜만에 복습해보는 객체 리터럴 방식으로 딕셔너리 구성하기!!
      //잘 기억이 안난다면 1주차 강의 6-5를 다시 복습해보세요!
      setWeather({
        temp, condition
      })

    } catch (error) {
      //혹시나 위치를 못가져올 경우를 대비해서, 안내를 준비합니다
      Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
    }
  }
  // 검색창 공란으로 변하기
  const [number, onChangeNumber] = React.useState('');


    return (
    <View style ={styles.container}>    
        <View style={styles.header}><MaterialCommunityIcons name="weather-pouring" size={120} color="black" />
        <Text style={styles.text}> 현재온도: {weather.temp + '°C' + weather.condition}</Text>
        <Text>체감온도: ?? °C 습도 ??% 동풍 ?? m/s</Text>
        <Text>미세먼지: ?? 초미세먼지: ?? 자외선: ??</Text>
        </View>
        <Text style={styles.textTag}>태그 검색</Text>
        <View style={styles.Content01}>
             <TouchableOpacity>
                <TextInput style ={{height:40, marginLeft:20, fontSize:25}} onChangeText={onChangeNumber} value={number} placeholder="useless placeholder"/>
             </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome5 name="search" size={30} color="black" margin={10}/>
            </TouchableOpacity>
            </View>
        <View style={styles.Content02}>
        <ScrollView>
            <Text>데이터 흩뿌리는 곳</Text>
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        borderRadius:40,
        borderWidth:3,
        borderColor:'black',
    },
    Content02:{
        flex:4,
        margin:10,
        backgroundColor:'yellow'
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