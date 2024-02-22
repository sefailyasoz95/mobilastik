import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import Carousel from "react-native-reanimated-carousel";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../Utils/constants";
import { Easing } from "react-native-reanimated";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../Utils/types";

type Props = NativeStackScreenProps<AuthStackParams, "OnboardingScreen">;

const OnboardingScreen = ({ navigation, route }: Props) => {
	return (
		<SafeAreaView className='flex-1 bg-slate-200 justify-between'>
			<View>
				<View>
					<Text className='text-2xl font-semibold self-center mt-10'>Aracının lastiği artık cebinde!</Text>
					<Text className='text-xs font-semibold text-gray-500 self-center mt-2 text-center'>Dükkan dükkan gezme!</Text>
					<Text className='text-xs font-semibold text-gray-500 self-center text-center px-12'>
						Her türlü araç için istediğin marka ve ebatta lastik artık kapında!
					</Text>
				</View>
				<Carousel
					loop
					width={DEVICE_WIDTH}
					snapEnabled
					autoPlay
					withAnimation={{
						config: {
							duration: 1000,
							easing: Easing.elastic(1.2),
						},
						type: "timing",
					}}
					height={DEVICE_HEIGHT * 0.3}
					autoPlayInterval={2000}
					mode='parallax'
					modeConfig={{
						parallaxScrollingScale: 0.9,
						parallaxScrollingOffset: 15,
					}}
					data={[
						require("../../Assets/onboarding/winter.png"),
						require("../../Assets/onboarding/tires.png"),
						require("../../Assets/onboarding/motorcycle2.png"),
						require("../../Assets/onboarding/motor3.png"),
					]}
					renderItem={({ item, index }) => (
						<View className='w-3/4 self-center'>
							<Image source={item} key={index} className='w-full h-full' resizeMode='contain' />
						</View>
					)}
				/>
				<View>
					<Text className='text-2xl font-semibold self-center text-center mt-10'>
						Ücretsiz üye ol, bu benzersiz deneyimi kaçırma!
					</Text>
				</View>
			</View>
			<TouchableOpacity
				className='w-2/3 self-center mb-10 border rounded-full items-center py-1'
				onPress={() => navigation.navigate("SignUpScreen")}>
				<Text className='font-medium text-lg'>Ücretsiz Üye Ol</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default OnboardingScreen;
