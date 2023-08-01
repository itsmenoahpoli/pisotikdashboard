import React from "react";
import { DashboardLayout } from "@/components";
import { SubvendoMachinesModule } from "@/modules";

export const SubvendoMachinePage: React.FC = () => {
	return (
		<DashboardLayout>
			<SubvendoMachinesModule />
		</DashboardLayout>
	);
};
