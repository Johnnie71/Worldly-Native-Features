import React, { useState } from "react";
import {
	View,
	Button,
	Text,
	ActivityIndicator,
	Alert,
	StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const LocationPicker = () => {
	const [location, setLocation] = useState();
	const [isFetching, setIsFetching] = useState(false);

	const verifyPermissions = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();

		if (status != "granted") {
			Alert.alert(
				"Insufficient permissions!",
				"You need to grant location permissions to use this app.",
				[{ text: "Okay" }]
			);
			return false;
		}
		return true;
	};
	const getLocationHandler = async () => {
		const hasPermission = await verifyPermissions();

		if (!hasPermission) {
			return;
		}

		try {
			setIsFetching(true);
			const location = await Location.getCurrentPositionAsync({
				timeout: 5000,
			});
			setLocation({
				lat: location.coords.latitude,
				lng: location.coords.longitude,
			});
		} catch (err) {
			console.log(err);
			Alert.alert(
				"Could not fetch location!",
				"Please try again later or pick a location on the map!",
				[{ text: "Okay" }]
			);
		}
		setIsFetching(false);
	};

	return (
		<View style={styles.locationPicker}>
			<View style={styles.mapPreview}>
				{isFetching ? (
					<ActivityIndicator size="large" color={Colors.primary} />
				) : (
					<Text>No location chosen yet!</Text>
				)}
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
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default LocationPicker;
