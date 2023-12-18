import React from 'react';
import { View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground, 
    StatusBar 
} from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ route }) => {
    const { WeatherData } = route.params;
    const { city: {country, name, population, sunrise, sunset} } = WeatherData;
    var city = name;
    const {
        container,
        imageBackground,
        CityText,
        cityName,
        countryName,
        populationWrapper,
        populationText,
        riseSetWrapper,
        riseSetText,
        rowLayout
    } = styles;

    if(name=='Thong Tay Hoi') {
        city="TP.HCM";
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <ImageBackground 
                source={require('../../assets/city.jpg')}
                style={imageBackground}
            >
                <Text style={[cityName, CityText]}>{city}</Text>
                <Text style={[countryName, CityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconSize={50}
                        iconColor={'#e74c3c'}
                        bodyText={population}
                        bodyTextStyle={populationText} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                        iconName={'sunrise'}
                        iconSize={50}
                        iconColor={'white'}
                        bodyText={moment.unix(sunrise).format('hh:mm:ss a')}
                        bodyTextStyle={riseSetText} />
                    <IconText 
                        iconName={'sunset'}
                        iconSize={50}
                        iconColor={'white'}
                        bodyText={moment.unix(sunset).format('hh:mm:ss a')}
                        bodyTextStyle={riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    imageBackground: {
        flex: 1,
    },
    CityText: {
        marginTop: 17,
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    populationWrapper: {
        alignContent: 'center',
        marginTop: 40,
    },
    populationText: {
        fontSize: 25,
        color: '#c0392b',
        marginLeft: 7.5,
        alignSelf: 'center',
    },
    riseSetWrapper: {
        alignContent: 'center',
        marginTop: 60,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        marginLeft: 7.5,
        alignSelf: 'center',
    },
    rowLayout: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default City;