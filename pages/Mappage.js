// 작성자 : 신동환,
// 작성일자 : 05. 08,
// 기능 : 지도 보여주기


import React from 'react';
import MapView, { Marker, Polyline  } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from "expo-location"
// import Geolocation from '@react-native-community/geolocation';

export default function App() {
  const markers = [
    {
      index: 1,
      coordinate: { latitude: 37.539867962931865, longitude: 126.99143455958644  },
      title: "경리단길",
      description: "놀러가기 좋다는데 안가봄",
      pinColor: "#d51ddb"
    },
    {
      coordinate: { latitude: 37.51089021395, longitude: 126.97922241876 },
      title: "한강",
      description: "뛰어들기 좋음",
      pinColor: "#559fa3"
    },
    {
      coordinate: { latitude: 37.53741521467865, longitude: 126.97649955494511 },
      title: "전쟁기념관",
      description: "__"
    },
    {
      coordinate: { latitude: 37.524798051578, longitude: 126.9640142881160 },
      title: "하이브",
      description: "BTS"
    }
    
  ];

  const path = [
    { latitude: 37.539867962931865, longitude: 126.99143455958644 },
    { latitude: 37.51089021395, longitude: 126.97922241876 },
    { latitude: 37.53741521467865, longitude: 126.97649955494511 },
    { latitude: 37.524798051578, longitude: 126.9640142881160 },
  ];
  
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      showsUserLocation
      initialRegion={{
            latitude: 37.52458613,
            longitude: 126.982112944,
            latitudeDelta: 0.05, //0.01 이렇게 숫자가 작아질수록 줌 
            longitudeDelta: 0.051,

        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            pinColor={marker.pinColor}
          />
        ))}
        <Polyline
          coordinates={path}
          strokeColor="#Fc0"
          strokeWidth={4}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
  },
  map: {
    width: '100%',
    // height: 300,
    height: "100%"
  },
});