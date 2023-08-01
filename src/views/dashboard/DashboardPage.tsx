import React from "react";
import { DashboardLayout } from "@/components";
import { DashboardModule } from "@/modules";

export const DashboardPage: React.FC = () => {
	return (
		<DashboardLayout>
			<DashboardModule />
		</DashboardLayout>
	);
};
