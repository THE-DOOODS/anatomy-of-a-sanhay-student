import { create } from "zustand";

export const useActionStore = create((set) => ({
	isOpenBackpack: false,
	setIsOpenBackpack: (isOpenBackpack) => set({ isOpenBackpack }),
}));
