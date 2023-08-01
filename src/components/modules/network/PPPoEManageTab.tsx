import React from "react";
import { Row, Col } from "antd";
import { PPPoEForm } from "@/components/modules/network/pppoe";

export const PPPoEManageTab: React.FC = () => {
	const handleFormSubmit = () => {
		//
	};

	return (
		<Row>
			<Col span={8}>
				<PPPoEForm handleFormSubmit={handleFormSubmit} />
			</Col>
		</Row>
	);
};
