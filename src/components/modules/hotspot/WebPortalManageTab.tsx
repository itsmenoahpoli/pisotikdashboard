import React from "react";
import { WebPortalSettingsForm } from "@/components/modules/hotspot/web-portal";

export const WebPortalManageTab: React.FC = () => {
	const handleFormSubmit = () => {
		//
	};

	return (
		<WebPortalSettingsForm
			handleWebPortalSettingsFormSubmit={handleFormSubmit}
		/>
	);
};
