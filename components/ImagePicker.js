import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Colors from "../constants/Colors";

const ImgPicker = (props) => {
	const [pickedImage, setPickedImage] = useState();

	const verifyPermissions = async () => {
		console.log("here");
		const result = await Permissions.askAsync(Permissions.CAMERA);
		console.log(result.status);
		if (result.status != "granted") {
			Alert.alert(
				"Insufficient permissions!",
				"You need to grant camera permissions to use this app.",
				[{ text: "Okay" }]
			);
			return false;
		}
		return true;
	};

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermissions();
		console.log("here");
		if (!hasPermission) {
			return;
		}

		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5,
		});

		console.log(image);
	};

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
				style={styles.takeImage}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	imagePicker: {
		alignItems: "center",
	},
	imagePreview: {
		width: "100%",
		height: 200,
		marginBottom: 10,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#ccc",
		borderWidth: 1,
	},
	image: {
		width: "100%",
		height: "100%",
		margin: 10,
	},
	takeImage: {
		marginBottom: 10,
	},
});

export default ImgPicker;
