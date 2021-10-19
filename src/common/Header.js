import React from 'react';
import {View,StyleSheet, Text } from 'react-native';

const  Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> {props.headerText} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        elevation: 6,
        position: 'relative',
    },
    textStyle: {
        fontSize: 30,
    }
});
export { Header };
