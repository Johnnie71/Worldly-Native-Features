import React from 'react';
import { View, Text, Stylesheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux'

import CustomHeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = props => {

    const places = useSelector(state => state.places.places);

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData => (
             <PlaceItem 
                image={null} 
                title={itemData.item.title}
                address={null}
                onSelect={() => {
                    props.navigation.navigate('PlaceDetail', {
                        placeTitle: itemData.item.title, 
                        placeId: itemData.item.id
                    });
                }}
            />
            )}
        />
    );
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