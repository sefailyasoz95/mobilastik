import {
	Image,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../Utils/types";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { CarTypes, CityTown } from "../../Utils/constants";

type Props = NativeStackScreenProps<AuthStackParams, "SignUpScreen">;

const SignUpScreen = ({ navigation, route }: Props) => {
	const safeAreaInsets = useSafeAreaInsets();
	const [vehicle, setVehicle] = useState("");
	const [town, setTown] = useState("");

	return (
		<SafeAreaView className='flex-1 bg-slate-200 justify-between' edges={["bottom", "left", "right"]}>
			<KeyboardAvoidingView behavior='padding'>
				<ScrollView bounces={false}>
					<View
						className='px-5 bg-white mb-6 pb-2 rounded-2xl shadow-md shadow-gray-300'
						style={{
							paddingTop: safeAreaInsets.top * 2,
						}}>
						<View className={`self-center ${safeAreaInsets.top > 20 ? "-mt-10" : "-mt-5"}  mb-3`}>
							{/* <Text className='text-2xl font-medium'>MobiLastik</Text> */}
							<Image source={require("../../Assets/splash.png")} className='w-32 h-32' resizeMode='contain' />
						</View>
						<TextInput
							placeholder='Ad Soyad'
							className='shadow-md shadow-gray-300 bg-white px-3 py-2.5 rounded-full mb-5'
							textContentType='name'
						/>
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
						<View className='shadow-md shadow-gray-300 bg-white rounded-full px-3 mb-5'>
							<Dropdown
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.itemTextStyle}
								data={CarTypes}
								maxHeight={300}
								containerStyle={styles.container}
								placeholder='Araç Tipi'
								labelField='label'
								valueField='value'
								value={vehicle}
								onChange={(item) => {
									setVehicle(item.value);
								}}
							/>
						</View>
						<View className='shadow-md shadow-gray-300 bg-white rounded-full px-3 mb-5'>
							<Dropdown
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.itemTextStyle}
								data={CityTown.İstanbul}
								maxHeight={300}
								containerStyle={styles.container}
								placeholder='İlçe'
								labelField='label'
								valueField='value'
								value={town}
								onChange={(item) => {
									setTown(item.value);
								}}
							/>
						</View>
						<TextInput
							placeholder='Adres'
							className='shadow-md shadow-gray-300 bg-white px-3 py-2.5 rounded-full mb-5'
							textContentType='streetAddressLine1'
						/>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
			<View style={{ paddingBottom: safeAreaInsets.top }}>
				<TouchableOpacity
					className='w-2/3 self-center rounded-full items-center py-2 bg-white shadow-md shadow-gray-300'
					onPress={() => navigation.navigate("SignUpScreen")}>
					<Text className='font-medium'>Ücretsiz Üye Ol</Text>
				</TouchableOpacity>
				<Text className='text-center my-2'>ya da</Text>
				<TouchableOpacity
					className='w-2/3 self-center border rounded-full items-center py-2'
					onPress={() => navigation.navigate("SignInScreen")}>
					<Text className='font-medium'>Giriş Yap</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	placeholderStyle: {
		color: "#ccc",
		fontSize: 14,
	},
	container: {
		borderRadius: 16,
	},
	itemTextStyle: {
		fontSize: 14,
	},
});
