import React from "react";
import { DashboardLayout } from "@/components";
import { HotspotModule } from "@/modules";

export const HotspotPage: React.FC = () => {
	return (
		<DashboardLayout>
			<HotspotModule />
		</DashboardLayout>
	);
};
