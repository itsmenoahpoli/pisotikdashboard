import React from "react";
import { Row, Col } from "antd";
import { HotspotForm } from "@/components/modules/network/hotspot";

export const HotspotManageTab: React.FC = () => {
	const handleFormSubmit = () => {
		//
	};

	return (
		<Row>
			<Col span={8}>
				<HotspotForm handleFormSubmit={handleFormSubmit} />
			</Col>
		</Row>
	);
};
