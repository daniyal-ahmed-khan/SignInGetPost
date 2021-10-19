import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Spinner =({ size="large" }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size } color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export { Spinner };