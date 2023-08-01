import React from "react";
import { DashboardLayout } from "@/components";
import { VendoMachinesModule } from "@/modules";

export const VendoMachinePage: React.FC = () => {
	return (
		<DashboardLayout>
			<VendoMachinesModule />
		</DashboardLayout>
	);
};
