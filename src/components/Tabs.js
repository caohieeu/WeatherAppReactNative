import React from 'react';
import { StyleSheet } from 'react-native';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ({ weather, forecast }) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'white',
            headerTitleAlign: 'center',
            tabBarStyle: {
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'absolute',
                borderTopWidth: 0,
                elevation: 0,
            },
            headerStyle: {
              backgroundColor: '#74b9ff',
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 13,
            },
            headerTitleStyle: {
                fontSize: 23,
                color: '#fff'
            }
          }}>
        <Tab.Screen 
            name={'Current'} 
            component={CurrentWeather}
            initialParams={{ WeatherData: weather }}
            options={{
              tabBarIcon: ({ focused }) => (
              <Feather 
                name={'droplet'}
                size={25}
                color={focused ? 'tomato' : 'white'}
                />
              ),
            }}
            />
          <Tab.Screen 
              name={'Upcoming'} 
              component={UpcomingWeather}
              initialParams={{ weatherData: forecast.list }}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather 
                    name='clock'
                    size={25}
                    color={focused ? 'tomato' : 'white'} 
                    />
                  )
              }}
             /> 
            <Tab.Screen 
              name={'City'} 
              component={City}
              initialParams={{ WeatherData: forecast }}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather 
                    name={'home'}
                    size={25}
                    color={focused ? 'tomato' : 'white'} 
                    />
                  )
              }} 
              /> 
        </Tab.Navigator>
    )
}

export default Tabs;