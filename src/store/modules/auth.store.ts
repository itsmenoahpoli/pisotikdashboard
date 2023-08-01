import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TAuthInitialState, TAuthStore } from "@/types/store/auth-store";

const initialState: TAuthInitialState = {
	user: undefined,
	authToken: undefined,
};

export const useAuthStore = create<TAuthStore>()(
	persist(
		(set, get) => ({
			/**
			 * State
			 */
			...initialState,

			/**
			 * Setters
			 */
			SET_USER: (data: TAuthInitialState["user"]) => {
				return set(() => ({
					user: data,
				}));
			},
			SET_AUTH_TOKEN: (data: TAuthInitialState["authToken"]) => {
				return set(() => ({
					authToken: data,
				}));
			},
			RESET_AUTH: () => {
				return set(() => initialState);
			},

			/**
			 * Getters
			 */
			GET_USER: () => get().user,
			IS_AUTHENTICATED: (): boolean => true,
		}),
		{ name: "auth-store" }
	)
);
