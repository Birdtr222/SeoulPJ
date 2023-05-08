import React, { useState, useEffect, Component } from 'react';
import { Image, Dimensions, TouchableOpacity, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';


//아이콘 가져오기
//날씨
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// 테스트용 이미지 (추후 데이터 셋 불러오기)
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

  //스크린 사이즈에 맞게 설정
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
  


export default function Category() {







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

    <View style ={styles.container}>
        <View style={styles.header}>
            <Text style={styles.texttitle}>걸어요, 서울</Text>
        </View>
        <View style={styles.container01}>
        <ScrollView style={styles.title}>
            <Text style={styles.textcontain}>안녕!</Text>
            {/*메인 이미지 슬라이더 
            *기능: 이미지 가로로 스크롤
            *작성자 :이주빈
            *작성일자 : 05.07*/}
            <View style={styles.titlecontents}>
            <ScrollView style={styles.titlecontents}
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal>
                {sildes1.map((e, index) =>
                <Image
                  key={e}
                  resizeMode='contain'
                  style={styles.titlecontents}
                  source={{uri: e}}  />)}
            </ScrollView>
            <View style={styles.wrapDot}> 
                { sildes1.map((e, index) => <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot}>●</Text>)}
            </View>
            </View>
            <Text style={styles.textcontain}>안녕!</Text>
        {/** 스크롤 두번째*/}
            <View style={styles.titlecontents}>
            <ScrollView style={styles.titlecontents}
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal>
                {/** 슬라이드 2번째 사진리스트 가져오기 */}
                {sildes2.map((e, index) =>
                <Image
                  key={e}
                  resizeMode='contain'
                  style={styles.titlecontents}
                  source={{uri: e}}  />)}
            </ScrollView>
            {/** 아래 점 이동, 1슬라이드 복붙으로, 같이 이동됨 (스타일 시트 다시해야됨 사진 위에 카테고리 불가..(?) */}
            <View style={styles.wrapDot}> 
                { sildes1.map((e, index) => <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot}>●</Text>)}
            </View> 
            </View>
            <Text style={styles.textcontain}>안녕!</Text>
        {/**세번째 슬라이드 */}
            <View style={styles.titlecontents}>
            <ScrollView style={styles.titlecontents}
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal>
                {/** 슬라이드 2번째 사진리스트 가져오기 */}
                {sildes2.map((e, index) =>
                <Image
                  key={e}
                  resizeMode='contain'
                  style={styles.titlecontents}
                  source={{uri: e}}  />)}
            </ScrollView>
            {/** 아래 점 이동, 1슬라이드 복붙으로, 같이 이동됨 (스타일 시트 다시해야됨 사진 위에 텍스트 불가, View title 먹였는데, 아래 튀어나옴 확인 필요함
             * 자바스크립트 어려워요 쉬익...ㅠ
             */}
            <View style={styles.wrapDot}> 
                { sildes1.map((e, index) => <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot}>●</Text>)}
            </View> 
            </View>

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
        backgroundColor:'white'
    },

    header:{
        flex:1,
        margin:10,
        flexDirection:'row',
        backgroundColor:'white'
    },
    
    texttitle:{
        fontSize:30,
        fontWeight: 'bold',
    },
    textcontain:{
        fontSize:20,
        fontWeight:'bold',

    },

    container01:{
        margin:6,
        flex:11,
        backgroundColor:'white'
    },

    title:{
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        flex:11,
        backgroundColor:'white'
    },
    
    titlecontents:{
        width: 373,
        height: 190,
        backgroundColor:'white'
    },

    //이미지 슬라이더 밑 동그라미
    wrapDot:{
        position: 'absolute',
        bottom: 0,
        flexDirection:'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color:  '#BBDEFB'
    },
    dot: {
        margin: 3,
        color: 'white'
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