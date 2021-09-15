import { Platform } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';

const PlacesStackNavigator = createStackNavigator();

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const PlacesNavigator = props => {

    return (
        <NavigationContainer >
            <PlacesStackNavigator.Navigator>
                <PlacesStackNavigator.Screen
                    name="PlacesListScreen"
                    component={PlacesListScreen}
                    options={{ title: "Places" }}
                />
            </PlacesStackNavigator.Navigator>
        </NavigationContainer>
    )

};

export default PlacesNavigator;