import React from 'react';
import { 
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    StatusBar,
    ImageBackground
} from 'react-native';
import { Feather } from '@expo/vector-icons'
import ListItem from '../components/ListItem';

// const DATA = [
//     {
//         dx_text: "2023-02-18 12:00:00",
//         main:{
//             temp_max: 8.55,
//             temp_min: 7.55,
//         },
//         weather: [
//             {
//                 main: 'Clear'
//             }
//         ]
//     },
//     {
//         dx_text: "2023-02-18 15:00:00",
//         main:{
//             temp_max: 8.55,
//             temp_min: 7.55,
//         },
//         weather: [
//             {
//                 main: 'Clouds'
//             }
//         ]
//     },
//     {
//         dx_text: "2023-02-18 18:00:00",
//         main:{
//             temp_max: 8.55,
//             temp_min: 7.55,
//         },
//         weather: [
//             {
//                 main: 'Rain'
//             }
//         ]
//     },
// ]

const UpcomingWeather  = ({ route }) => {
    const { weatherData } = route.params;
    if(weatherData == null) {
        console.log("Error");
    }
    else {
        console.log(weatherData);
    }
    const renderItem = ({item}) => (
        <ListItem 
            dx_text={item.dt}
            min={item.main.temp_min}
            max={item.main.temp_max}
            condition={item.weather[0].main} />
    )
    const { container, imageBackground, titleContainer, titlePage } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                style={imageBackground} 
                source={require('../../assets/Upcoming-Weather.jpg')}
                >
                <View style={titleContainer}>
                    <Text style={titlePage}>Weather Upcoming</Text>
                </View>
                <FlatList 
                    data={weatherData} 
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginVertical: 15
    },
    titlePage: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: '#98E4FF',
    },
    imageBackground: {
        flex: 1,
    }
})

export default UpcomingWeather;