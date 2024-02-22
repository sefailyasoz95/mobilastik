import "react-native-gesture-handler";
import { RecoilRoot } from "recoil";
import Main from "./Main";
import Toast from "react-native-toast-message";
import ToastComponent, { ToastProps } from "./src/Components/Toast";

const toastConfig = {
	customToast: ({ props }: { props: ToastProps }) => <ToastComponent message={props.message} icon={props.icon} />,
};
export default function App() {
	return (
		<RecoilRoot>
			<Main />
			<Toast config={toastConfig} />
		</RecoilRoot>
	);
}
