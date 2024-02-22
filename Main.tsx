import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/Stacks/AuthStack";
import AppStack from "./src/Stacks/AppStack";

type Props = {};

const Main = (props: Props) => {
	return (
		<NavigationContainer>
			<AuthStack />
			{/* <AppStack /> */}
		</NavigationContainer>
	);
};

export default Main;
