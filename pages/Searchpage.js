import React, { useState, useEffect, Component } from 'react';
import { ActivityIndicator, TextInput, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import * as Location from "expo-location"
import axios from "axios"

// api key
const Seoul_API_KEY = "435a6477486a756e313135706f4c6e73";
const Weather_API_KEY = "cfc258c75e1da2149c33daffd07a911d";

// 이미지 테스트
import cafe from '../assets/cafe.jpg'


//아이콘 가져오기
import { Fontisto, MaterialCommunityIcons, FontAwesome5, Foundation, Ionicons } from '@expo/vector-icons';

// 날씨에 따른 아이콘 변경
const icons = {
    Clouds: "cloudy",
    Clear: "day-sunny",
    Atmosphere: "cloudy-gusts",
    Snow: "snow",
    Rain: "rains",
    Drizzle: "rain",
    Thunderstorm: "lightning",
    Mist : "cloudy-gusts"
    }

//상단 길이 고정
const screenWidth = Dimensions.get('window').width


export default function Searchpage () {
    // 날씨데이터 받아오기
    useEffect(() => {
        getWeather();
    },[]);
     // 날씨
    const [days, setDays] = useState({temp : 0,  condition : ''});
    // 위치 권한 요청시 ok, setOk 의 상태지정
    const [ok, setOk] = useState(true);
    // 날씨 함수
    const getWeather = async() => {
        try{
        // 위치 권한 요청 함수.
        const { granted } = await Location.requestForegroundPermissionsAsync();
        // 권한를 받아오지 못하였을 때 상태 = false
        if(!granted){
            setOk(false);
        }
        }
        catch(e) {
        // error :undefined is not a function 인 이유, 제대로 된 함수 사용하지 않아서이다.
        // requestForegroundAsync가 아닌 requestForegroundPermissionsAsync 라고 썼어야했음!
        // 수정 완료 날짜 05.17, 작성자 : 류정인
        console.log(e);
        }
    
        // 위도 경도 가져오기
        const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
        // 역지오코드 : 경도, 위도를 다시 주소로 바꿔주는 것
        const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps:false});
        // 콘솔로그 찍으면 미국 Mountain View 가 나온다. 왜 미국임.. GPS 분명 우리나라로 찍었는디
        // console.log(location)
    
        const result = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Weather_API_KEY}&lang={kr}&units=metric`
          );
          const temp = result.data.main.temp; 
          const condition = result.data.weather[0].main
    
        setDays({
            temp,condition
        });
        }
    
    // api 데이터 받아오기
    useEffect(()=> {
        getData();
      },[]);
    const [data, setData] = useState(null);

    const getData = async ()=>{
        const response =await axios.get('http://openapi.seoul.go.kr:8088/sample/json/culturalEventInfo/1/1/')
            // console.log(response);
        const imgSrc = response.data.culturalEventInfo.row[0].MAIN_IMG;
        console.log(imgSrc)
        // const cultureDate = response.data.culturalEventInfo.row;
        setData({imgSrc});
        }

    // 네비게이션 기능 오류로 주석 처리    
    // useEffect(()=>{
    //     navigation.setOptions({
    //     title:"검색페이지",
    //     headerStyle:{
    //       backgroundColor: '#1F266A',
    //       shadowColor: "#1F266A",
    //     },
    //     headerTintColor: "white",
    //   })},[])

  // 검색창 공란으로 변하기
  const [txt, onChangeTXT] = React.useState('');

    return (
    <View style ={styles.container}>    
        {/* 날씨 이모티콘 */}
        <View style={styles.header}><Fontisto name={icons[days.condition]} size={120} color="black" />
        {/* 기온 */}
        <Text style={styles.text}> 현재온도: {parseFloat(days.temp).toFixed(0)} °C</Text>
        </View>
        {/* 검색 이름 */}
        <Text style={styles.textTag}>태그 검색</Text>
        {/* 검색 상태바 */}
        <View style={styles.Content01}>
             <TouchableOpacity>
                <TextInput style ={{height:40, marginLeft:20, fontSize:25}} onChangeText={onChangeTXT} value={txt} placeholder="검색"/>
             </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome5 name="search" size={30} color="black" margin={10}/>
            </TouchableOpacity>
            </View>
        <View style={styles.Content02}>
            <ScrollView contentContainerStyle={styles.ContentScroll}>
                {/* 삼항연산자 ( 조건식 ? 참일때 실행 : 거짓일때 실행) 으로 로딩 창 구현 */}
                {/* <ActivityIndicator color={"white"} size={"large"}/> */}
                {/* 데이터 나오는 곳 */}
                {/* 이미지 데이터는 잘 불러와지는데, 이미지가 안나옴 */}
                <Text> {data.imgSrc} </Text>
                <Image source={{uri: "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=6a59720cd9c34bbfa056eb6b5031f809&thumb=Y"}}/>
                <Text style={{fontSize:100,}}>호호호 </Text>
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
            {/* <TouchableOpacity onPress={()=>{Navigation.navigate('Searchpage')}}> */}
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
        margin:10,
        flex:4,
        backgroundColor:'yellow'
    },
    ContentScroll:{
        backgroundColor:'teal'
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