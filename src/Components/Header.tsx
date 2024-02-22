import { Pressable, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
	text: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
};

const Header = ({ text, leftIcon, rightIcon }: Props) => {
	const navigation = useNavigation();
	return (
		<View className='flex-row items-center px-3 justify-between'>
			{leftIcon ? (
				leftIcon
			) : (
				<Pressable onPress={navigation.goBack}>
					<AntDesign name='left' size={22} color='black' />
				</Pressable>
			)}
			<Text className='text-black text-lg ml-2 font-semibold'>{text}</Text>
			{rightIcon ? rightIcon : <View className='w-[25px]' />}
		</View>
	);
};

export default Header;
