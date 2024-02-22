import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { AppStackParams } from "../Utils/types";
import HomeScreen from "../Screens/App/HomeScreen";

const App = createStackNavigator<AppStackParams>();
const options: StackNavigationOptions = {
	headerShown: false,
};
const AppStack = () => {
	return (
		<App.Navigator screenOptions={options}>
			<App.Screen name='HomeScreen' component={HomeScreen} />
		</App.Navigator>
	);
};

export default AppStack;
