import React from "react";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";
import {
	GeneralManageTab,
	UsersManageTab,
	SchedulerManageTab,
} from "@/components/modules/settings";

const TAB_ITEMS: TabsProps["items"] = [
	{
		key: "1",
		label: "General",
		children: <GeneralManageTab />,
	},
	{
		key: "2",
		label: "Users",
		children: <UsersManageTab />,
	},
	{
		key: "3",
		label: "Scheduler",
		children: <SchedulerManageTab />,
	},
];

export const SettingsModule: React.FC = () => {
	return (
		<div className="settings-module">
			<Card>
				<Tabs defaultActiveKey="1" items={TAB_ITEMS} />
			</Card>
		</div>
	);
};
