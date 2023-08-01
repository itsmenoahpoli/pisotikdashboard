import React from "react";
import { Row, Col, Space } from "antd";
import {
	WanDetails,
	WanStatus,
	WanForm,
} from "@/components/modules/network/wan";
import type { TWanFormTypes } from "@/types/components/modules/wan";

export const WanManageTab: React.FC = () => {
	const [showForm, setShowForm] = React.useState<boolean>(false);
	const [formType, setFormType] = React.useState<TWanFormTypes>("dynamic");

	const handleChangeFormType = (val: TWanFormTypes) => {
		setFormType(val);
	};

	const handleResetForm = () => {
		setShowForm(false);
		setFormType("dynamic");
	};

	const handleShowForm = (isShow: boolean) => {
		setShowForm(isShow);
	};

	return (
		<Row gutter={50}>
			<Col span={12}>
				<Space direction="vertical" size={5}>
					<h3>WAN Information</h3>
					{!showForm ? (
						<WanDetails handleShowForm={handleShowForm} />
					) : (
						<WanForm
							handleChangeFormType={handleChangeFormType}
							handleResetForm={handleResetForm}
							formType={formType}
						/>
					)}
				</Space>
			</Col>
			<Col span={12}>
				<Space direction="vertical" size={5}>
					<h3>WAN Status</h3>
					<WanStatus />
				</Space>
			</Col>
		</Row>
	);
};
