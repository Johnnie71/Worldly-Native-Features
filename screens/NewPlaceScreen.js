import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';

const NewPlaceScreen = props => {

    return (
        <View>
            <Text>Title</Text>
            <TextInput />
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