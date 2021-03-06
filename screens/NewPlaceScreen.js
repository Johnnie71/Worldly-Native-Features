import React, { useState } from "react";
import {
	ScrollView,
	View,
	Text,
	Button,
	TextInput,
	StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import * as placesActions from "../store/places-actions";
import ImagePicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = (props) => {
	const [titleValue, setTitleValue] = useState("");
	const [selectedImage, setSelectedImage] = useState();

	const dispatch = useDispatch();

	const titleChangeHandler = (text) => {
		setTitleValue(text);
	};

	const savePlaceHandler = () => {
		dispatch(placesActions.addPlace(titleValue, selectedImage));
		props.navigation.goBack();
	};

	const imageTakenHandler = (image) => {
		setSelectedImage(image);
	};
	return (
		<ScrollView>
			<View style={styles.form}>
				<Text style={styles.label}>Title</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={titleChangeHandler}
					value={titleValue}
				/>
				<ImagePicker onImageTaken={imageTakenHandler} />
				<LocationPicker />
				<Button
					style={styles.saveButton}
					title="Save Place"
					color={Colors.primary}
					onPress={savePlaceHandler}
				/>
			</View>
		</ScrollView>
	);
};

export const screenOptions = (navData) => {
	return {
		headerTitle: "Add Place",
	};
};

const styles = StyleSheet.create({
	form: {
		margin: 30,
		// borderWidth: 1,
	},
	label: {
		fontSize: 18,
		marginBottom: 15,
	},
	textInput: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		marginBottom: "10%",
		paddingVertical: 4,
		paddingHorizontal: 2,
	},
	// saveButton: {
	// 	marginTop: 10,
	// },
});

export default NewPlaceScreen;
