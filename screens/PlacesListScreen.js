import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';

const PlacesListScreen = props => {

    return (
        <View>
            <Text>Places List Screen</Text>
        </View>
    )
};

export const screenOptions = navData => {

    return {
        headerTitle: 'Places List',
    }
};

const styles = Stylesheet.create({
    
})

export default PlacesListScreen;