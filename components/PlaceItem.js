import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {

    return (
        <TouchableOpacity>
            <Image style={styles.image}/>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({

});

export default PlaceItem;