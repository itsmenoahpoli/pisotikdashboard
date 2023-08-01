import React from "react";
import { DashboardLayout } from "@/components";
import { NetworkModule } from "@/modules";

export const NetworkPage: React.FC = () => {
	return (
		<DashboardLayout>
			<NetworkModule />
		</DashboardLayout>
	);
};
