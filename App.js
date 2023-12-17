import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import useGetWeather from './src/hooks/useGetWeather';
import useGetForecastWeather from './src/hooks/useGetForecastWeather';
import moment from 'moment';
const App = () => {
  const [loadingCurrent, errorCurrent, weatherCurrent] = useGetWeather();
  const [loadingForecast, errorForecast, weatherForecast] = useGetForecastWeather();
  //console.log(loadingForecast, errorForecast, weatherForecast.list);
  //console.log(loadingCurrent, errorCurrent, weatherCurrent);
  
  if(weatherCurrent && weatherCurrent.main && weatherForecast && weatherForecast.list) {
    return (
      <NavigationContainer>
          <Tabs weather={weatherCurrent} forecast={weatherForecast}/>
      </NavigationContainer>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
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