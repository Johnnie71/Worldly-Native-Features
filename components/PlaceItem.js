import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const PlaceItem = (props) => {
	return (
		<TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
			<Image style={styles.image} source={{ uri: props.image }} />
			<View style={styles.infoContainer}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.address}>{props.address}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	address: {
		color: "#666",
		fontSize: 16,
	},
	title: {
		color: "black",
		fontSize: 18,
		marginBottom: 1,
	},
	placeItem: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	infoContainer: {
		marginLeft: 25,
		width: 250,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 50,
		backgroundColor: "#ccc",
		borderColor: Colors.primary,
		borderWidth: 1,
	},
});

export default PlaceItem;
