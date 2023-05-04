import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, TouchableOpacity, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

//이미지 불러오기
import house from "./assets/icons/house.png"
import maps from "./assets/icons/maps.png"
import moviesApp from "./assets/icons/moviesApp.png"
import settings from "./assets/icons/settings.png"
import cafe from "./assets/cafe.jpg"



export default function App() {
  return (
    <View style={styles.safeArea}> 
    <View style={styles.container}>
      {/*배너 부분 작성자 :류정인
       * 작성일자 : 05.03
       */}
      <Text style={styles.maintextStyle}>걸어요, 서울</Text>
      {/*배너 부분 작성자 :류정인
       * 기능 구현 : 클릭시 디테일 페이지로 넘어가게, 스크롤 뷰 예정
       */}
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <Image style={styles.mainImage} source={cafe}/><Image style={styles.mainImage} source={cafe}/><Image style={styles.mainImage} source={cafe}/>
          </ScrollView>
        <ScrollView style={{backgroundColor: 'white', flex: 9, margin:13}}>
          <View style={styles.cardContainer}>
          {/* 샘플용 View */}
          <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}}/>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게!</Text>
              <Text style={styles.cardDesc} numberOfLines={3}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
              <Text style={styles.cardDate}>2020.09.09</Text>
            </View>
          </View>
          </View>
          <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}}/>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게!</Text>
              <Text style={styles.cardDesc} numberOfLines={3}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
              <Text style={styles.cardDate}>2020.09.09</Text>
            </View>
          </View>
          </View>
        </ScrollView>
        {/*샘플용 View ---> 여기까지 */}
        {/*아이콘 구현 */}
        <View style={{backgroundColor: 'white', flex: 0.2, flexDirection: 'row', justifyContent:"space-around", margin: 12}}>
          {/* 메인 화면 */}
          <TouchableOpacity><Image source={house} resizeMode={"stretch"} style={styles.imageStyle01}></Image></TouchableOpacity>
          {/* 지도 */}
          <TouchableOpacity><Image source={maps} resizeMode={"stretch"} style={styles.imageStyle02}></Image></TouchableOpacity>
          {/* 좋아요 */}
          <TouchableOpacity><Image source={moviesApp} resizeMode={"stretch"} style={styles.imageStyle03}></Image></TouchableOpacity>
          {/* 설정 */}
          <TouchableOpacity><Image source={settings} resizeMode={"stretch"} style={styles.imageStyle04}></Image></TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

// styles 변수 이름 답게 화면을 그려주는, 
//더 자세히는 JSX문법을 꾸며주는 내용을 담고 있습니다.
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // 걸어요, 서울
  maintextStyle:{
    fontSize: 20,
    fontWeight: '700',
    marginTop:10,
    marginLeft:20
  },

  //메인 이미지
  mainImage:{
    flex:1,
    width:'100%',
    //컨텐츠의 높이 값
    marginTop:5,
    height: 300,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    alignSelf:"center"
  },

  //이모티콘 이미지
  // 홈 이모티콘
  imageStyle01 :{
    flex:1,
    width:"100%", 
    height:"80%",
    margin:15,
    alignItems:"center",              
    justifyContent:"center"
  },
  // 지도 이모티콘
  imageStyle02 :{
    flex:1,
    width:"100%", 
    height:"80%",
    margin:15,
    alignItems:"center",              
    justifyContent:"center"
  },
  // 좋아요 이모티콘
  imageStyle03 :{
    flex:1,
    width:"100%", 
    height:"80%",
    margin:15,
    alignItems:"center",              
    justifyContent:"center"
  },
  // 설정 이모티콘
  imageStyle04 :{
    flex:1,
    width:"100%", 
    height:"80%",
    margin:15,
    alignItems:"center",              
    justifyContent:"center"
  },

  // 카드
  cardContainer: {
    //마진 없음
  },
  card:{
    flex:1,
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10

  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    fontSize:20,
    fontWeight:"700"
  },
  cardDesc: {
    fontSize:15
  },
  cardDate: {
    fontSize:10,
    color:"#A6A6A6",
  }


});
