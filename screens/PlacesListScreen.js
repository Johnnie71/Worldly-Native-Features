import React from 'react';
import { View, Text, Stylesheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';

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
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Add Place'
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate('New Place')
                    }}
                />
            </HeaderButtons>
        )
    }
};

const styles = Stylesheet.create({
    
})

export default PlacesListScreen;