import React from "react";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";
import {
	UserAccountsManageTab,
	OnlineAccountsManageTab,
	DisabledAccountsManageTab,
} from "@/components/modules/pppoe";

const TAB_ITEMS: TabsProps["items"] = [
	{
		key: "1",
		label: "User Accounts",
		children: <UserAccountsManageTab />,
	},
	{
		key: "2",
		label: "Online Accounts",
		children: <OnlineAccountsManageTab />,
	},
	{
		key: "3",
		label: "Disabled Accounts",
		children: <DisabledAccountsManageTab />,
	},
];

export const PPPoEModule: React.FC = () => {
	return (
		<div className="pppoe-module">
			<Card>
				<Tabs defaultActiveKey="1" items={TAB_ITEMS} />
			</Card>
		</div>
	);
};
