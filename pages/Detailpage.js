import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity, Alert } from 'react-native';

export default function Detailpage() {
  const customAlert = () => {
    Alert.alert("이동 중")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle1}>{"\n"}하루 권장 당 25g 미만  </Text>
      <Text style={styles.textStyle2}>-세계보건기구(WHO)기준</Text>
      {/*이미지 태그 soruce 부분에 가져온 미지 이름을 넣습니다 */}
      <Image source= {{uri: 'https://cdn.pixabay.com/photo/2017/10/28/17/39/soup-2897649_960_720.jpg'}}
      resizeMode={"cover"}
        style={styles.imageStyle}
      />
      <StatusBar style="auto" />

    <TouchableOpacity style={styles.textContainer3} onPress={customAlert}>
      <Text style={styles.textStyle3}>음식별 당분 검색하기</Text>
    </TouchableOpacity>

   <Text style={styles.textContainer2}>
    정상혈당은 몇인가요? {"\n"}
   [정상치] 70~99 ㎎/ℓ {"\n"}8시간 이상 공복 후 측정한 혈당이 126 mg/dL 이상인 경우 당뇨병으로 진단이 됩니다.
    <Text style={styles.textStyle2}>
     {"\n"}출처: 대한진단검사의학회</Text>
     </Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width:"100%",
    height:"30%",
    alignItems:"center",
    justifyContent:"center"
  },
  textContainer1: {
    //영역의 바깥 공간 이격을 뜻합니다(하단 이미지 참조)
    margin:10,
    //영역 안의 컨텐츠 이격 공간을 뜻합니다(하단 이미지 참조)
    padding: 10,
    //테두리의 구부러짐을 결정합니다. 지금 보면 조금 둥글죠?
    borderRadius:10,
    //테두리의 두께를 결정합니다
    borderWidth:2,
    //테두리 색을 결정합니다
    borderColor:"#000",
    //테구리 스타일을 결정합니다. 실선은 solid 입니다
    borderStyle:"dotted"
  },
  textContainer2: {
    margin:0,
    padding: 20,
    borderRadius:10,
    borderWidth:1,
    borderColor:"black",
    backgroundColor:"#fff",
    borderStyle:"dotted",
    alignItems:"flex-end",
  },
  textContainer3: {
    padding: 20,
    margin:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:"#D0F5A9",
  },
    textStyle3: {
    //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
    color:"green",
    //글자의 크기를 결정합니다
    fontSize:13,
    //글자의 두께를 결정합니다
    fontWeight:"450",
    //가로기준으로 글자의 위치를 결정합니다
    textAlign:"center"
  },textStyle1: {
    //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
    color:"green",
    //글자의 크기를 결정합니다
    fontSize:18,
    //글자의 두께를 결정합니다
    fontWeight:"700",
    //가로기준으로 글자의 위치를 결정합니다
    textAlign:"center"
  },
  textStyle2: {
    //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
    color:"black",
    //글자의 크기를 결정합니다
    fontSize:13,
    //글자의 두께를 결정합니다
    fontWeight:"300",
    //가로기준으로 글자의 위치를 결정합니다
    textAlign:"right"
  }


});