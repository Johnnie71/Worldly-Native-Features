import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const NewPlaceScreen = props => {

    return (
        <View>
            <Text>Title</Text>
        </View>
    )

};

export const screenOptions = navData => {

    return {
        headerTitle: 'Add Place',
    }
}

const styles = StyleSheet.create({

});

export default NewPlaceScreen;