import React from "react";
import { DashboardLayout } from "@/components";
import { SettingsModule } from "@/modules";

export const SettingsPage: React.FC = () => {
	return (
		<DashboardLayout>
			<SettingsModule />
		</DashboardLayout>
	);
};
