import React from "react";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";
import { SubvendoManageTab, PendingManageTab, BlockedManageTab} from "@/components/modules/subvendo-machines";

const TAB_ITEMS: TabsProps['items'] = [
	{
		key: "1",
		label: "Sub Vendo",
		children: <SubvendoManageTab />
	},
	{
		key: "2",
		label: "Pending",
		children: <PendingManageTab />
	},
	{
		key: "3",
		label: "Blocked",
		children: <BlockedManageTab />
	},
]

export const SubvendoMachinesModule: React.FC = () => {
	return (
		<div className="subvendo-machines-module">
			<Card>
				<Tabs defaultActiveKey="1" items={TAB_ITEMS} />
			</Card>
		</div>
	);
};
