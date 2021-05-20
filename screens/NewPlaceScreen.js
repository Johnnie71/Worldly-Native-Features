import React from 'react';
import { ScrollView, View, Text, Button, TextInput, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const NewPlaceScreen = props => {

    return (
        <ScrollView>
            <View>
                <Text>Title</Text>
                <TextInput />
                <Button title='Save Place' color={Colors.primary} />
            </View>
        </ScrollView>
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