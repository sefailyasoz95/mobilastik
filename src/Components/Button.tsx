import { Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
	text: string;
	onPress: () => void;
	size?: "lg" | "md" | "sm";
	type?: "filled" | "outlined";
	rounded?: "full" | "md" | "sm";
	color?: "success" | "danger" | "black" | "transparent";
};

const Button = ({ onPress, text, color = "transparent", rounded = "full", size = "sm", type = "outlined" }: Props) => {
	return (
		<TouchableOpacity className='w-2/3 self-center border rounded-full items-center py-1' onPress={onPress}>
			<Text className='font-medium text-lg'>{text}</Text>
		</TouchableOpacity>
	);
};

export default Button;
