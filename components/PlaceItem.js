import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {

    return (
        <TouchableOpacity onPress={props.onSelect} >
            <Image style={styles.image} source={{ uri: props.image }}/>
            <View style={styles.infoContainer} >
                <Text style={styles.title} >{props.title}</Text>
                <Text style={styles.address} >{props.address}</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({

});

export default PlaceItem;