import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {

    return (
        <View>
            <HeaderButton 
               {...props} 
               IconComponent={Ionicons} 
               iconSize={23}
               color={Platform.OS === 'android' ? 'black' : Colors.primary}
            />
        </View>
    )

};

const styles = StyleSheet.create({

});

export default CustomHeaderButton;