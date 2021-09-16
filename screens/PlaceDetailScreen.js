import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = props => {

    return (
        <View>
            <Text>Place Detail Screen</Text>
        </View>
    )

};

export const screenOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    }
};

const styles = StyleSheet.create({

});

export default PlaceDetailScreen;