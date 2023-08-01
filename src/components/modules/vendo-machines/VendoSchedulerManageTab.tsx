import React from "react";
import { SchedulerSettingsForm } from "@/components/modules/vendo-machines/forms";

export const VendoSchedulerManageTab: React.FC = () => {
	const handleFormSubmit = () => {
		//
	};

	return (
		<SchedulerSettingsForm
			handleSchedulerSettingsFormSubmit={handleFormSubmit}
		/>
	);
};
