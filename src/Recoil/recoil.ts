import { atom } from "recoil";
export type UserType = {
	name: string;
	surname: string;
	address: string;
	town: string;
	city: string;
	birthDate?: Date;
	vehicleType: string;
};
const userState = atom<UserType | undefined>({
	key: "userState",
	default: undefined,
});

export { userState };

export const DummyUser: UserType = {
	name: "Sefa İlyas",
	surname: "Öz",
	address: "İnönü Mah.",
	city: "İstanbul",
	town: "Ataşehir",
	vehicleType: "Otomobil",
	birthDate: new Date("08-08-1995"),
};
