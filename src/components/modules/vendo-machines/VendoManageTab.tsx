import React from "react";
import { VendoSettingsForm } from "@/components/modules/vendo-machines/forms";

export const VendoManageTab: React.FC = () => {
	const handleFormSubmit = () => {
		//
	};

	return <VendoSettingsForm handleVendoSettingsFormSubmit={handleFormSubmit} />;
};
