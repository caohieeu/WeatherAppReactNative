import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherType from '../utilities/WeatherType';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

const ListItem = (props) => {
    const { dx_text, max, min, condition } = props;
    const { date, temp, item } = styles;
    return (
        <View style={item}>
            <MaterialCommunityIcons name={WeatherType[condition].icon} size={50} color={'white'} style={{color:'black'}} />
            <View style={styles.dateTextWrapper}>
                <Text style={date}>{moment.unix(dx_text).format('dddd')}</Text>
                <Text style={date}>{moment.unix(dx_text).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{min}°/{max}°</Text>
            {/* <Text>{condition}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#80B3FF'
    },
    temp: {
        fontSize: 20,
    },
    date: {
        fontSize: 15,
    },
    dateTextWrapper: {
        flexDirection: 'column',
    }
})

export default ListItem;