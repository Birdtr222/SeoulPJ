import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
// 작성자 : 정혜윤, 이주빈, 기능 : 메인 사진 불러오기, 일자: 05.03
import background from "./assets/background.jpg"
import cafe from "./assets/cafe.jpg"
import cafe2 from "./assets/cafe2.jpg"
// <--작성자 : 정혜윤, 이주빈, 기능 : 메인 사진 불러오기, 일자: 05.03-->

export default function App() {
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.mainImage}>
      {/* 작성자 : 정혜윤, 이주빈, 기능 : 상단 로고 이름, 일자 : 05.03 */}
      <Text style={styles.title}>걸어요, 서울</Text>
      {/* 작성자 : 정혜윤, 이주빈, 기능 : 상단 배너, 일자 : 05.03 */}
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>인기코스</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>지도</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>날씨</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>MBTI</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton05}><Text style={styles.middleButtonText}>커뮤니티</Text></TouchableOpacity>
      </ScrollView>

      {/* 작성자 : 정혜윤, 이주빈, 기능 : 이미지, 일자 : 05.03, 추후 수정 예정 */}
      <Image 
        source={background}
        resizeMode={"contain"}
        style={styles.imageStyle}/>
      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        <View style={styles.card}>
        <Image 
        source={cafe}
        style={styles.middleContainer}/>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>HOT PLACE!!!</Text>
            <Text style={styles.cardDesc} numberOfLines={3}>친구, 연인이랑 가기 좋은 요즘 핫한 인스타 감성 카페들을 소개합니다.
커피맛 뿐만 아니라 맛있는 디저트도 빼놓을 수 없죠? </Text>
            <Text style={styles.cardDate}>2020.09.09</Text>
          </View>
        </View>
        
      </View>
      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        <View style={styles.card}>
        <Image 
        source={cafe2}
        style={styles.cardContainer}/>
          <View style={styles.cardText}>
    
            <Text style={styles.cardTitle}>HOT PLACE!!!</Text>
            <Text style={styles.cardDesc} numberOfLines={3}>친구, 연인이랑 가기 좋은 요즘 핫한 인스타 감성 카페들을 소개합니다.
커피맛 뿐만 아니라 맛있는 디저트도 빼놓을 수 없죠? </Text>
            <Text style={styles.cardDate}>2020.09.09</Text>
          </View>
        </View>
        
      </View>
      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}}/>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>HOT PLACE!!!</Text>
            <Text style={styles.cardDesc} numberOfLines={3}>친구, 연인이랑 가기 좋은 요즘 핫한 인스타 감성 카페들을 소개합니다.
커피맛 뿐만 아니라 맛있는 디저트도 빼놓을 수 없죠? </Text>
            <Text style={styles.cardDate}>2020.09.09</Text>
          </View>
        </View>
        
      </View>
      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}}/>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>HOT PLACE!!!</Text>
            <Text style={styles.cardDesc} numberOfLines={3}>친구, 연인이랑 가기 좋은 요즘 핫한 인스타 감성 카페들을 소개합니다.
커피맛 뿐만 아니라 맛있는 디저트도 빼놓을 수 없죠? </Text>
            <Text style={styles.cardDate}>2020.09.09</Text>
          </View>
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#e8f6ff',
  },
  title: {
    //폰트 사이즈
    fontSize: 30,
    //폰트 두께
    fontWeight: '700',
    //위 공간으로 부터 이격
    marginTop:50,
       //왼쪽 공간으로 부터 이격'
    marginLeft:20
  },
  mainImage: {
    //컨텐츠의 넓이 값
    width:'90%',
    //컨텐츠의 높이 값
    height:200,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    marginTop:20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    alignSelf:"center"
  },
  middleContainer:{
    width:'90%',
    height:200,
    marginTop:10,
    marginLeft:10
  },
  middleButton01: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#a6dbff",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton02: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#79c9ff",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#4db7ff",
    borderRadius:15,
    margin:7
  },
  middleButton04: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#21a6ff",
    borderRadius:15,
    margin:7
  },
  middleButton05: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#1a84cc",
    borderRadius:15,
    margin:7
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center"
  },
  cardContainer: {
    width:'90%',
    height:200,
    marginTop:10,
    marginLeft:10,
    margin:100,
    padding:10

  },
  card:{
    flex:1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
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
