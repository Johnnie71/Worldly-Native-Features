import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';

const PlacesNavigator = props => {

    const PlacesStackNavigator = createStackNavigator();

    return (
        <NavigationContainer >

        </NavigationContainer>
    )

};

export default PlacesNavigator;