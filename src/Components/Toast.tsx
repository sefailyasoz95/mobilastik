import React from "react";
import { Text, View } from "react-native";
import { BlurView } from "expo-blur";
import { DEVICE_WIDTH } from "../Utils/constants";

export type ToastProps = {
	message: string;
	icon?: React.ReactNode;
};

function ToastComponent({ message, icon }: ToastProps) {
	return (
		<BlurView
			style={{
				overflow: "hidden",
			}}
			className={"top-5 w-11/12 flex-row items-center justify-between self-center rounded-2xl bg-[#161523AA] p-4"}>
			<View style={{ width: "80%" }} className='flex-row items-center'>
				{icon && icon}
				<Text
					className={"text-white ml-2 font-medium"}
					style={{
						width: DEVICE_WIDTH - 1000,
						overflow: "hidden",
					}}>
					{message}
				</Text>
			</View>
		</BlurView>
	);
}

export default ToastComponent;
