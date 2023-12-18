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

const UpcomingWeather  = ({ route }) => {
    const { weatherData } = route.params;
    const renderItem = ({item}) => (
        <ListItem 
            dx_text={item?.dt}
            min={item.main?.temp_min}
            max={item.main?.temp_max}
            condition={item.weather[0]?.main} />
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
        textAlign: 'center',
        marginTop: 10
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