import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';


const ImagePicker = props => {
    return (
        <View>
            <View><Text>No image selected</Text></View>
            <Button title="Take Image" color={Colors.primary}/>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImagePicker;