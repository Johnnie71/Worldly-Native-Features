import { Platform, useColorScheme } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import PlacesListScreen, { screenOptions as PlacesScreenOptions } from '../screens/PlacesListScreen';
import PlaceDetailScreen, { screenOptions as DetailScreenOptions} from '../screens/PlaceDetailScreen';
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
    //accessing system color scheme for user prefered
    const scheme = useColorScheme();

    return (
        <NavigationContainer theme={defaultNavigationOptions} >
            <PlacesStackNavigator.Navigator>
                <PlacesStackNavigator.Screen
                    name="PlacesListScreen"
                    component={PlacesListScreen}
                    options={PlacesScreenOptions}
                />
                <PlacesStackNavigator.Screen
                    name="PlaceDetailScreen"
                    component={PlaceDetailScreen}
                    options={DetailScreenOptions}
                />
                <PlacesStackNavigator.Screen
                    name="NewPlaceScreen"
                    component={NewPlaceScreen}
                />
                <PlacesStackNavigator.Screen
                    name="MapScreen"
                    component={MapScreen}
                />
            </PlacesStackNavigator.Navigator>
        </NavigationContainer>
    );

};

export default PlacesNavigator;