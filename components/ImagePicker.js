import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';


const ImagePicker = props => {

    const takeImageHandler = () => { };


    return (
        <View>
            <View>
                <Text>No image selected</Text>
            </View>
            <Button
                title="Take Image"
                color={Colors.primary}
                onPress={takeImageHandler}
            />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImagePicker;