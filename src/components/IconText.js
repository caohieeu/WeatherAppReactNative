import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
    const { iconPopulation, iconName, iconSize, iconColor, bodyText, bodyTextStyle } = props;
    const { textTheme, container } = styles;
    return (
        <View style={container}>
            <Feather name={iconName} size={iconSize} color={iconColor} />
            <Text style={[textTheme, bodyTextStyle]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
    }
})

export default IconText;