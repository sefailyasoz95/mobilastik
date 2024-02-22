import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../Utils/types";

type Props = NativeStackScreenProps<AuthStackParams, "SignInScreen">;

const SignInScreen = ({ navigation, route }: Props) => {
	return (
		<SafeAreaView>
			<Text>SignInScreen</Text>
		</SafeAreaView>
	);
};

export default SignInScreen;
