import React from 'react';
import { View, Platform, FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = props => {

    const places = useSelector(state => state.places.places);

    return (
        <View style={styles.screen}>
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
        </View>
    );
};

export const screenOptions = navData => {

    return {
        headerTitle: 'All Places',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Add Place'
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate('NewPlaceScreen')
                    }}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default PlacesListScreen;