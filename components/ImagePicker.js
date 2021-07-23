import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';


const ImagePicker = props => {

    const takeImageHandler = () => { };

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                <Text>No image selected</Text>
                <Image style={styles.image} />
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
    imagePicker: {

    },
    imagePreview: {

    },
    image: {

    }

});

export default ImagePicker;