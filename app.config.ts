import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
	name: "MobiLastik",
	owner: "Softwarify",
	slug: "mobil-lastik",
	scheme: "exp+mobil-lastik",
	version: "1.0.0",
	orientation: "portrait",
	icon: "./src/assets/icon.png",
	splash: {
		image: "./src/assets/splash.png",
		resizeMode: "contain",
		backgroundColor: "#fff",
	},
});

export default defineConfig;
