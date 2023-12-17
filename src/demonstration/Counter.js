import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [NewCount, setNewCount] = useState(0);
    useEffect(() => {
        console.log('Counter is changed');
    }, [count])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Count: ${count}`}</Text>
            <Button 
                color={'red'}
                title={'Increase'}
                onPress={() => {
                    setCount(count + 1);
                }} 
            />
            <Button 
                color={'green'}
                title={'Decrease'}
                onPress={() => {
                    setCount(count - 1);
                }} 
            />
            <Button 
                color={'red'}
                title={'Increase'}
                onPress={() => {
                    setNewCount(NewCount + 1);
                }} 
            />
            <Button 
                color={'green'}
                title={'Decrease'}
                onPress={() => {
                    setNewCount(NewCount - 1);
                }} 
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backGrouncolor: 'pink',
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})

export default Counter;