import React from 'react';
import { View, Text } from 'react-native'

const OurChild = (props) => {
    const { message } = props;  
    return (
        <View>
            <Text style={{width: 200, height: 200, backgroundColor: 'pink'}}>{message}</Text>
        </View>
    )
}

export default OurChild;