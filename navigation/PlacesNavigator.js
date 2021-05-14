import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';

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