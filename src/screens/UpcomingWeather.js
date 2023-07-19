import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import ListItem from '../components/ListItem'
const DATA = [
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 933,
      humidity: 50,
      temp_kf: -1.9
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ]
  },
  {
    dt: 1661878800,
    main: {
      temp: 296.31,
      feels_like: 296.07,
      temp_min: 296.2,
      temp_max: 296.31,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 932,
      humidity: 53,
      temp_kf: 0.11
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ]
  },
  {
    dt: 1661882400,
    main: {
      temp: 294.94,
      feels_like: 294.74,
      temp_min: 292.84,
      temp_max: 294.94,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 931,
      humidity: 60,
      temp_kf: 2.1
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n'
      }
    ]
  }
]

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.contaier}>
      <ImageBackground
        source={require('../../assets/cloud.jpg')}
        style={styles.image}
      >
        <Text style={styles.title}>Upcomg weather</Text>

        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,

    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20
  }
})
