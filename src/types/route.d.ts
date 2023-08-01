import { ReactNode } from "react";

export type TRoute = {
	path: string;
	element: ReactNode;
	name: string;
	meta?: {
		sidebar: {
			isShown: boolean;
			label: string;
			icon: ReactNode;
		};
	};
};
