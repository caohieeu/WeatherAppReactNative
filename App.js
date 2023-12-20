import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import useGetWeather from './src/hooks/useGetWeather';
import useGetForecastWeather from './src/hooks/useGetForecastWeather';
import ErrorItem from './src/components/ErrorItem';

const App = () => {
  const [loadingCurrent, errorCurrent, weatherCurrent] = useGetWeather();
  const [loadingForecast, errorForecast, weatherForecast] = useGetForecastWeather();
  
  if(weatherCurrent && weatherCurrent.main && weatherForecast 
    && weatherForecast.list && !loadingCurrent && !loadingForecast) {
    return (
      <NavigationContainer>
          <Tabs weather={weatherCurrent} forecast={weatherForecast}/>
      </NavigationContainer>
    )
  }
  else {
    return (
      <View style={styles.container}>
        {errorCurrent ||  errorForecast ? (<ErrorItem />) : <ActivityIndicator size={'large'} color={'blue'} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
});

export default App;