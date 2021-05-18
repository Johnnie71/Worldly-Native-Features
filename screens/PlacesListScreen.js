import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
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
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Add Place'/>
        </HeaderButtons>
    }
};

const styles = Stylesheet.create({
    
})

export default PlacesListScreen;