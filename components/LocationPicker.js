import React from "react";
import {
	View,
	Button,
	Text,
	ActivityIndicator,
	Alert,
	StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";

const LocationPicker = () => {
	return (
		<View>
			<View>
				<Text>No location chosen yet!</Text>
			</View>
			<Button title="Get user location" color={Colors.primary} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default LocationPicker;
