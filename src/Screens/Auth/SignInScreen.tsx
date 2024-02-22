import { Animated, Easing, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../Utils/types";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import useToast from "../../Hooks/useToast";
import { AntDesign } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { DummyUser, userState } from "../../Recoil/recoil";

type Props = NativeStackScreenProps<AuthStackParams, "SignInScreen">;

const SignInScreen = ({ navigation, route }: Props) => {
	const safeAreaInsets = useSafeAreaInsets();
	const [user, setUser] = useRecoilState(userState);

	const { showToast } = useToast();
	const top = useRef(new Animated.Value(-300)).current;
	useEffect(() => {
		Animated.timing(top, {
			toValue: 0,
			useNativeDriver: true,
			duration: 1000,
			easing: Easing.elastic(1.2),
		}).start();
	}, []);

	const onGoBack = () => {
		Animated.timing(top, {
			toValue: -300,
			useNativeDriver: true,
			duration: 1000,
			easing: Easing.elastic(1.2),
		}).start();
		setTimeout(() => {
			navigation.navigate("SignUpScreen");
		}, 500);
	};
	return (
		<SafeAreaView className='flex-1 bg-slate-200 justify-between' edges={["bottom", "left", "right"]}>
			<Animated.View
				className='px-5 bg-white mb-6 pb-2 rounded-2xl shadow-md shadow-gray-300'
				style={{
					paddingTop: safeAreaInsets.top * 2,
					transform: [{ translateY: top }],
				}}>
				<View className={`self-center ${safeAreaInsets.top > 20 ? "-mt-10" : "-mt-5"}  mb-3`}>
					{/* <Text className='text-2xl font-medium'>MobiLastik</Text> */}
					<Image source={require("../../Assets/splash.png")} className='w-32 h-32' resizeMode='contain' />
				</View>
				<TextInput
					placeholder='Email'
					className='shadow-md shadow-gray-300 bg-white px-3 py-2.5 rounded-full mb-5'
					keyboardType='email-address'
					textContentType='emailAddress'
				/>
				<TextInput
					placeholder='Şifre'
					className='shadow-md shadow-gray-300 bg-white px-3 py-2.5 rounded-full mb-5'
					textContentType='password'
				/>
			</Animated.View>
			<View style={{ paddingBottom: safeAreaInsets.top }}>
				<TouchableOpacity
					className='w-2/3 self-center border rounded-full items-center py-2'
					onPress={() => {
						showToast({ message: "This is a testing toast", icon: <AntDesign name='left' size={22} color='black' /> });
						setUser(DummyUser);
					}}>
					<Text className='font-medium'>Giriş Yap</Text>
				</TouchableOpacity>
				<Text className='text-center my-2'>ya da</Text>
				<TouchableOpacity
					className='w-2/3 self-center rounded-full items-center py-2 bg-white shadow-md shadow-gray-300'
					onPress={onGoBack}>
					<Text className='font-medium'>Ücretsiz Üye Ol</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default SignInScreen;
