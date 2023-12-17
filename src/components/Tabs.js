import React from 'react';
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
                backgroundColor: 'rgba(0,0,0,0.5)',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                color: 'tomato'
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