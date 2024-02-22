import "react-native-gesture-handler";
import { RecoilRoot } from "recoil";
import Main from "./Main";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
	default: "native",
});
export default function App() {
	return (
		<RecoilRoot>
			<Main />
		</RecoilRoot>
	);
}
