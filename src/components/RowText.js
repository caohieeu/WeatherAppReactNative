import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RowText = (props) => {
    const { containerStyles , textOne, textTwo, textOneStyle, textTwoStyle } = props;
    return(
        <View style={containerStyles}>
            <Text style={textOneStyle}>{textOne} </Text>
            <Text style={textTwoStyle}>{textTwo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default RowText;