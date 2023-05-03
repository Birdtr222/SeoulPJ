import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'; // (작성자 : 류정인, 기능 : 안드로이드 상단 상태바 비우기, 일자: 05.01)
import React, {useState} from 'react'; // import (작성자 : 류정인,기능 : 좋아요 버튼, 일자: 05.01)
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  // 작성자 류정인, 기능 : 좋아요 버튼 함수, 일자 : 05.01
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Text>push test를 위한 메세지 입니다. 얍얍 혜윤언니 컴퓨터다</Text>
        <StatusBar style="auto" />
        {/* 작성자 : 류정인, <View style containerOne>, 기능 : 이미지 업로드 버튼 구현 x, 좋아요 버튼 누르면 숫자 올라감, reload 시 0으로 초기화되므로 다시 고민해볼 예정, 작성 일자 : 05.01 */}
        <View style={styles.containerOne}>
          <TouchableOpacity style={styles.ImagebuttonOne}>
          <Text style>이미지 업로드 버튼</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ImagebuttonTwo} onPress={onPress} >
          <Text style> Count : {count} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  containerOne:{
    flex : 1,
    backgroundColor: '#AFD3E2',
  },
  ImagebuttonOne: {
    height:20,
    backgroundColor:'#19A7CE',
    borderRadius:10,
    margin:20,
  },
  ImagebuttonTwo: {
    height:20,
    backgroundColor:'#19A7CE',
    borderRadius:10,
    margin:20,
  },
});
