import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = (props) => {
	return (
		<View>
			<Text>Place Detail Screen</Text>
		</View>
	);
};

export const screenOptions = ({ route }) => {
	const { placeTitle } = route.params; //destructuring the params from the route
	return {
		headerTitle: placeTitle,
	};
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
