import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/Stacks/AuthStack";
import AppStack from "./src/Stacks/AppStack";
import { useRecoilValue } from "recoil";
import { userState } from "./src/Recoil/recoil";

type Props = {};

const Main = (props: Props) => {
	const user = useRecoilValue(userState);
	return <NavigationContainer>{user ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};

export default Main;
