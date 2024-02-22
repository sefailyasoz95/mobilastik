import Toast from "react-native-toast-message";

type ToastParams = {
	message: string;
	icon?: React.ReactNode;
};
const useToast = () => {
	const showToast = ({ message, icon }: ToastParams, onHide?: () => void) => {
		Toast.show({
			type: "customToast",
			props: { message, icon },
			onHide,
		});
	};
	const hideToast = () => {
		Toast.hide();
	};
	return { showToast, hideToast };
};

export default useToast;
