import React from "react";
import { DashboardLayout } from "@/components";
import { PPPoEModule } from "@/modules";

export const PPPoEPage: React.FC = () => {
	return (
		<DashboardLayout>
			<PPPoEModule />
		</DashboardLayout>
	);
};
