import React from 'react';
import { View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground, 
    StatusBar 
} from 'react-native';
import IconText from '../components/IconText';

const City = () => {
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
    return (
        <SafeAreaView style={[styles.container]}>
            <ImageBackground 
                source={require('../../assets/HCM-City.jpeg')}
                style={imageBackground}
            >
                <Text style={[cityName, CityText]}>TP.HCM</Text>
                <Text style={[countryName, CityText]}>Việt Nam</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconSize={50}
                        iconColor={'#e74c3c'}
                        bodyText={10000}
                        bodyTextStyle={populationText} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                        iconName={'sunrise'}
                        iconSize={50}
                        iconColor={'white'}
                        bodyText={'06:00:00am'}
                        bodyTextStyle={riseSetText} />
                    <IconText 
                        iconName={'sunset'}
                        iconSize={50}
                        iconColor={'white'}
                        bodyText={'05:00:00pm'}
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