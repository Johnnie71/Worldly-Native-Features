import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';

const PlacesStackNavigator = createStackNavigator();

const defaultNavigationOptions = {
    
};

const PlacesNavigator = props => {

    return (
        <NavigationContainer >

        </NavigationContainer>
    )

};

export default PlacesNavigator;