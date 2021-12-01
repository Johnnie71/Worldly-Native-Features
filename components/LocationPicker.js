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
	const getLocationHandler = () => {};

	return (
		<View style={styles.locationPicker}>
			<View style={styles.mapPreview}>
				<Text>No location chosen yet!</Text>
			</View>
			<Button
				title="Get user location"
				color={Colors.primary}
				onPress={getLocationHandler}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	locationPicker: {
		marginBottom: 15,
	},
	mapPreview: {
		marginBottom: 10,
		width: "100%",
		height: 150,
		borderColor: "#ccc",
	},
});

export default LocationPicker;
