import React from "react";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";
import {
	VendoManageTab,
	VendoSchedulerManageTab,
} from "@/components/modules/vendo-machines";

const TAB_ITEMS: TabsProps["items"] = [
	{
		key: "1",
		label: "Vendo",
		children: <VendoManageTab />,
	},
	{
		key: "2",
		label: "Scheduler",
		children: <VendoSchedulerManageTab />,
	},
];

export const VendoMachinesModule: React.FC = () => {
	return (
		<div className="vendo-machines-module">
			<Card>
				<Tabs defaultActiveKey="1" items={TAB_ITEMS} />
			</Card>
		</div>
	);
};
