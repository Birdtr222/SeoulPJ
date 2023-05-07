import React, {useState} from 'react';

import { Image, TouchableOpacity, Pressable, ScrollView, StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
//아이콘 이미지
import house from "../assets/icons/house.png"
import category from "../assets/icons/category.png"
import maps from "../assets/icons/maps.png"
import moviesApp from "../assets/icons/moviesApp.png"
import settings from "../assets/icons/settings.png"

{/*(For이미지 슬라이더)메인 이미지 리스트*/}
const sildes1 = [
  'https://as1.ftcdn.net/v2/jpg/02/25/80/28/1000_F_225802838_2KbIbVqBHdmqnYvr6RpDjQcCyNy9BHR3.jpg',
  'https://as2.ftcdn.net/v2/jpg/01/80/99/79/1000_F_180997980_t7guTO143h8FwC7YRIXKJjTZVxXApdeZ.jpg',
  'https://as2.ftcdn.net/v2/jpg/02/91/23/15/1000_F_291231531_kwS5iNi5r3FgJMQD06hYeAT95MZ2sV7T.jpg',
  'https://as2.ftcdn.net/v2/jpg/01/99/89/27/1000_F_199892726_UMrrpAC4aMiouqbCJuIgVlrRQH9s2gXM.jpg'
]

const sildes2 = [

  'https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://cdn.pixabay.com/photo/2015/10/17/15/54/seoul-olympic-park-992727_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/10/16/02/20/wallpapers-3750472_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/11/02/21/50/south-korea-3791154_960_720.jpg'
]

// width와 height의 레이아웃을 사용자마다의 스크린기준으로 개발시 사용. 
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const App = () => {
  const [imgActive, setimgActive] = useState(0);
  onchange = (nativeEvent) => {
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      //이미지 슬라이더 닷 같이 움직이기
      if(slide !=imgActive){
        setimgActive(slide);
      }
    }
  }
  return (
    //아이폰 화면 깨짐 방지
    <View style={styles.safeArea}>
    <View style={StyleSheet.container1}>
      <Text style={styles.maintextStyle}>걸어요, 서울 </Text>
      <Text style={styles.sub1textStyle}>오늘의 날씨 : 27도, 맑음 </Text>
      {/*메인 이미지 슬라이더 
        *기능: 이미지 가로로 스크롤
        *작성자 :이주빈
        *작성일자 : 05.07*/}
      <View style={styles.wrap}>

        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
          >
            {sildes1.map((e, index) =>
                <Image
                  key={e}
                  resizeMode='stretch'
                  style={styles.wrap}
                  source={{uri: e}}  />)}
          </ScrollView>
          <View style={styles.wrapDot}>
            { sildes1.map((e, index) =>
            <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
              )
            }
          </View>
      </View >
      <View style={StyleSheet.container2}>
      {/*간격*/}
      <Text style={styles.sub2textStyle}> {"\n"} 오늘은 어떤 곳을 산책하고 싶으세요?
      </Text>
      <Text style={styles.sub2textStyle}>
       </Text>
      {/*이미지 슬라이더
        *기능: 이미지 가로로 스크롤
        *작성자 :이주빈
        *작성일자 : 05.07*/}
      <View style={styles.wrap2}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap2}
          >
            {
              sildes2.map((e, index) =>
                <Image
                  key={e}
                  resizeMode='stretch'
                  style={styles.wrap2}
                  source={{uri: e}}  />
              )
            }
          </ScrollView>
          <View style={styles.wrapDot2}>
            {
              sildes2.map((e, index) =>
            <Text
              key={e}
              style={imgActive == index ? styles.dot2Active : styles.dot2}>
              ●
            </Text>
              )
            }
          </View>
      </View >

    <View style={styles.container3}>
{/*샘플용 View ---> 여기까지 */}
{/*아이콘 구현 */}
    <View style={{backgroundColor: 'white', flex: 0.2, flexDirection: 'row', justifyContent:"space-around", margin: 12}}>
    {/* 카테고리 */}
    <TouchableOpacity><Image source={category} resizeMode={"stretch"} style={styles.imageStyle01}></Image></TouchableOpacity>
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
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container1: {
    flex: 1
  },
  container2: {
    flex: 1
  },
  container3:{
    flex:1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  wrap2: {
    width: WIDTH,
    height: HEIGHT * 0.3
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    alignSelf: 'center'
  },
  wrapDot2: {
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    alignSelf: 'center'
  },
  //이미지 슬라이더 밑 동그라미
  dotActive: {
    margin: 3,
    color:  '#BBDEFB'
  },
  dot2Active: {
    margin: 3,
    color: '#BBDEFB'
  },
  dot: {
    margin: 3,
    color: 'white'
  },
  dot2: {
    margin: 3,
    color: 'white'
  },
  //아이폰 글자 깨짐 방지
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
    marginTop:25,
    marginLeft:10
  },
  //오늘의 날씨
  sub1textStyle:{
    fontSize: 14,
    fontWeight: '300',
    marginTop:5,
    marginLeft:10
  },
  sub2textStyle:{
    fontSize: 14,
    fontWeight: '300',
    marginTop:5,
    marginLeft:1
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
  }
});
export default App;