import {
	IoPieChartOutline,
	IoGitNetworkOutline,
	IoWifiOutline,
	IoPeopleOutline,
	IoFileTrayStackedOutline,
	IoFileTrayOutline,
	IoCogOutline,
} from "react-icons/io5";
import {
	ErrorPage,
	LoginPage,
	DashboardPage,
	NetworkPage,
	HotspotPage,
	PPPoEPage,
	VendoMachinePage,
	SubvendoMachinePage,
	SettingsPage,
} from "@/views";
import type { TRoute } from "@/types/route";

export const ROUTES: Array<TRoute> = [
	{
		path: "*",
		name: "error",
		element: <ErrorPage />,
	},
	{
		path: "/login",
		name: "login",
		element: <LoginPage />,
	},
	{
		path: "/",
		element: <DashboardPage />,
		name: "dashboard",
		meta: {
			sidebar: {
				isShown: true,
				label: "Dashboard (Sales Report)",
				icon: <IoPieChartOutline />,
			},
		},
	},
	{
		path: "/network-management",
		element: <NetworkPage />,
		name: "network",
		meta: {
			sidebar: {
				isShown: true,
				label: "Network Management",
				icon: <IoGitNetworkOutline />,
			},
		},
	},
	{
		path: "/hotspot-management",
		element: <HotspotPage />,
		name: "hotspot",
		meta: {
			sidebar: {
				isShown: true,
				label: "Hotspot Management",
				icon: <IoWifiOutline />,
			},
		},
	},
	{
		path: "/pppoe-management",
		element: <PPPoEPage />,
		name: "pppoe",
		meta: {
			sidebar: {
				isShown: true,
				label: "PPPoE Management",
				icon: <IoPeopleOutline />,
			},
		},
	},
	{
		path: "/vendo-machine-management",
		element: <VendoMachinePage />,
		name: "vendo-machine",
		meta: {
			sidebar: {
				isShown: true,
				label: "Vendo Machines",
				icon: <IoFileTrayStackedOutline />,
			},
		},
	},
	{
		path: "/subvendo-machine-management",
		element: <SubvendoMachinePage />,
		name: "subvendo-machine",
		meta: {
			sidebar: {
				isShown: true,
				label: "Sub-vendo Machines",
				icon: <IoFileTrayOutline />,
			},
		},
	},
	{
		path: "/settings",
		element: <SettingsPage />,
		name: "settings",
		meta: {
			sidebar: {
				isShown: true,
				label: "Settings",
				icon: <IoCogOutline />,
			},
		},
	},
];
