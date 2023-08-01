import React from "react";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";
import {
	UsersManageTab,
	HostsManageTab,
	BypassManageTab,
	BlockedManageTab,
	WebPortalManageTab,
	RatesManageTab,
	VouchersManageTab,
} from "@/components/modules/hotspot";

const TAB_ITEMS: TabsProps["items"] = [
	{
		key: "1",
		label: "Users",
		children: <UsersManageTab />,
	},
	{
		key: "2",
		label: "Hosts",
		children: <HostsManageTab />,
	},
	{
		key: "3",
		label: "By Passed",
		children: <BypassManageTab />,
	},
	{
		key: "4",
		label: "Blocked",
		children: <BlockedManageTab />,
	},
	{
		key: "5",
		label: "Web Portal",
		children: <WebPortalManageTab />,
	},
	{
		key: "6",
		label: "Rates",
		children: <RatesManageTab />,
	},
	{
		key: "7",
		label: "Vouchers",
		children: <VouchersManageTab />,
	},
];

export const HotspotModule: React.FC = () => {
	return (
		<div className="hotspot-module">
			<Card>
				<Tabs defaultActiveKey="7" items={TAB_ITEMS} />
			</Card>
		</div>
	);
};
