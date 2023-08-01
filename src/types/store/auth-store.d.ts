export type TAuthInitialState = {
	user?: object;
	authToken?: string;
};

export type TAuthStore = {
	SET_USER: (data: any) => void;
	GET_USER: () => void;
	RESET_AUTH: () => void;
	IS_AUTHENTICATED: () => boolean;
} & TAuthInitialState;
