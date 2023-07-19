import React from 'react'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useGetWeather } from './src/hooks/useGetWeather'

const Tab = createBottomTabNavigator()
export default function App() {
  const [loading, error, weather] = useGetWeather()

  if (weather) {
    console.log(loading, error, weather)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              color: 'tomato'
            }
          }}
        >
          <Tab.Screen
            name="Current"
            component={() => <CurrentWeather weatherData={weather.list[0]} />}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name="droplet"
                  size={25}
                  color={focused ? 'tomato' : 'black'}
                />
              )
            }}
          />
          <Tab.Screen
            name="Upcomming"
            component={() => <UpcomingWeather weatherData={weather.list} />}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name="clock"
                  size={25}
                  color={focused ? 'tomato' : 'black'}
                />
              )
            }}
          />
          <Tab.Screen
            name="City"
            component={() => <City weatherData={weather.city} />}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name="home"
                  size={25}
                  color={focused ? 'tomato' : 'black'}
                />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
