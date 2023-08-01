import React from "react";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";
import {
	WanManageTab,
	HotspotManageTab,
	PPPoEManageTab,
} from "@/components/modules/network";

const TAB_ITEMS: TabsProps["items"] = [
	{ key: "1", label: "WAN", children: <WanManageTab /> },
	{ key: "2", label: "Hotspot", children: <HotspotManageTab /> },
	{ key: "3", label: "PPPoE", children: <PPPoEManageTab /> },
];

export const NetworkModule: React.FC = () => {
	return (
		<div className="network-module">
			<Card>
				<Tabs defaultActiveKey="1" items={TAB_ITEMS} />
			</Card>
		</div>
	);
};
