import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import WeatherType from '../utilities/WeatherType';
import RowText from '../components/RowText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CurrentWeather = ({ route }) => {
  const { WeatherData } = route.params;

  const { main: {temp, feels_like, temp_max, temp_min}, weather } = WeatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={[styles.wrapper, {backgroundColor: WeatherType[weatherCondition]}]}>
        <ImageBackground
          source={ WeatherType[weatherCondition]['backgroundImage'] }
          style={styles.imageBackground}
        >
          <View style={{flex: 1, marginBottom: 50}}>
          <View style={styles.container}>
            <MaterialCommunityIcons 
                    name={WeatherType[weatherCondition]?.icon}
                    size={100} 
                    color="black"
                    style={styles.iconStyle} />
              <Text style={styles.tempStyle}>{temp}℃</Text>
              <Text style={styles.feels}>{feels_like}℃</Text>
              <RowText 
                containerStyles={styles.highLowWrapper}
                textOne={`High: ${temp_max}℃`}
                textTwo={`Low: ${temp_min}℃`}
                textOneStyle={styles.highLow}
                textTwoStyle={styles.highLow} />
            </View>
              <RowText 
                containerStyles={styles.bodyWrapper}
                textOne={weather[0]?.description}
                textTwo={WeatherType[weatherCondition]?.message}
                textOneStyle={styles.description}
                textTwoStyle={styles.message} />
          </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  tempStyle: {
    color: 'white',
    fontSize: 48,
    textShadowColor: '#585858',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 4,
  },
  feels: {
    fontSize: 30,
    color: 'white',
    marginBottom: 5,
    textShadowColor: '#585858',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
  },
  highLow: {
    color: 'white',
    fontSize: 16,
    marginEnd: 5,
    marginStart: 5,
    textShadowColor: '#585858',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'start',
    padding: 10
  },
  description: {
    fontSize: 40,
    color: 'white'
  },
  message: {
    fontSize: 20,
    color: 'white'
  },
  imageBackground: {
    flex: 1,
  },
  iconStyle: {
    marginTop: 13,
  }
});

export default CurrentWeather;