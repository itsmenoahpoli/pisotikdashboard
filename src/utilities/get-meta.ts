import { ROUTES } from "@/router";
import type { TRoute } from "@/types/route";

export const getRouteMeta = (path: string): TRoute => {
	const meta = ROUTES.find((r) => r.path === path);

	return meta as TRoute;
};
