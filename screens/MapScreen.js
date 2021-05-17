import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = props => {

    return (
        <View>
            <Text>Map Screen</Text>
        </View>
    )

};

export const screenOptions = navData => {

    return {
        headerTitle: 'Map Screen',
    }
}

const styles = StyleSheet.create({

});

export default MapScreen;