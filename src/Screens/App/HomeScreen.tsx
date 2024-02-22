import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useRecoilValue } from "recoil";
import { userState } from "../../Recoil/recoil";
import Carousel from "react-native-reanimated-carousel";
import { Easing } from "react-native-reanimated";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../Utils/constants";

type Props = {};

const HomeScreen = (props: Props) => {
	const user = useRecoilValue(userState);
	const safeAreaInsets = useSafeAreaInsets();
	return (
		<SafeAreaView className='flex-1 bg-white' edges={["bottom", "left", "right"]}>
			<View className='bg-blue-400 px-3 pb-14' style={{ paddingTop: safeAreaInsets.top + 10 }}>
				{/* <Text className='text-white text-[16px] font-semibold'>
					{user?.name} {user?.surname}
				</Text> */}
				<View className='rounded-full bg-white shadow-md shadow-[#00000033] py-2 px-3 mt-3 flex-row items-center justify-between'>
					<TextInput placeholder='İhtiyacın olanı ara' className='w-10/12' />
					<Feather name='search' size={24} color='black' />
				</View>
			</View>
			<ScrollView className='-mt-8'>
				<View className='w-10/12 self-center rounded-2xl bg-white shadow-md shadow-[#00000033] z-20'>
					{/* <Image source={require("../../Assets/onboarding/tires.png")} className='w-full h-32' resizeMode='contain' /> */}
					<Carousel
						loop
						width={DEVICE_WIDTH * 0.833}
						snapEnabled
						autoPlay
						withAnimation={{
							config: {
								duration: 1000,
								easing: Easing.elastic(1.2),
							},
							type: "timing",
						}}
						height={150}
						autoPlayInterval={2000}
						mode='parallax'
						modeConfig={{
							parallaxScrollingScale: 0.9,
							parallaxScrollingOffset: 15,
						}}
						data={[
							require("../../Assets/brands/bridgestone.jpg"),
							require("../../Assets/brands/continental.jpg"),
							require("../../Assets/brands/dunlop.jpeg"),
							require("../../Assets/brands/goodyear.jpg"),
							require("../../Assets/brands/lassa.jpg"),
							require("../../Assets/brands/Michelin.png"),
							require("../../Assets/brands/petlas.jpg"),
							require("../../Assets/brands/pirelli.png"),
						]}
						renderItem={({ item, index }) => (
							<View className='w-3/4 self-center items-center'>
								<Image source={item} key={index} className='w-full h-[140px]' resizeMode='contain' />
							</View>
						)}
					/>
				</View>
				<View className='bg-slate-200 mt-6 rounded-xl px-3 py-4 '>
					<Text className='text-2xl mb-2 font-semibold'>Aracın için öneriler</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{[
							require("../../Assets/onboarding/winter.png"),
							require("../../Assets/onboarding/tires.png"),
							require("../../Assets/onboarding/motorcycle2.png"),
							require("../../Assets/onboarding/motor3.png"),
						].map((img, index) => (
							<View key={index}>
								<Image source={img} className='w-24 h-24 mx-4' resizeMode='cover' />
								<Text className='text-gray-500 font-semibold'>{index + 1} Marka Önerisi</Text>
							</View>
						))}
					</ScrollView>
				</View>
				<View className='bg-slate-200 mt-6 rounded-xl px-3 py-4 '>
					<Text className='text-2xl mb-2 font-semibold'>En çok beğenilenler</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{[
							require("../../Assets/onboarding/winter.png"),
							require("../../Assets/onboarding/tires.png"),
							require("../../Assets/onboarding/motorcycle2.png"),
							require("../../Assets/onboarding/motor3.png"),
						].map((img, index) => (
							<View key={index}>
								<Image source={img} className='w-24 h-24 mx-4' resizeMode='cover' />
								<Text className='text-gray-500 font-semibold'>{index + 1} Yıldız Verilmiş</Text>
							</View>
						))}
					</ScrollView>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
