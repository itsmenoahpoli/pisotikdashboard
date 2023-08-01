import React from "react";
import { Modal, Form, Input } from "antd";

type THotspotUser = {
	username: string;
	security_code?: string;
	credit: string;
	time_limit: string;
	time_validity?: string;
	pause_limit: string;
};

type TAddUserForm = {
	show: boolean;
	handleShow: (bool: boolean) => void;
	handleFormSubmit: (hotspotUser: THotspotUser) => void;
};

export const AddUserForm: React.FC<TAddUserForm> = (props) => {
	return (
		<Modal
			open={props.show}
			title="Add User"
			okText="Submit"
			onCancel={() => props.handleShow(false)}
			destroyOnClose
		>
			<Form layout="vertical">
				<Form.Item label="Username" required>
					<Input />
				</Form.Item>
				<Form.Item label="Security Code (optional)">
					<Input />
				</Form.Item>
				<Form.Item label="Credit" required>
					<Input />
				</Form.Item>
				<Form.Item label="Time Limit" required>
					<Input />
				</Form.Item>
				<Form.Item label="Time Validity (optional)">
					<Input />
				</Form.Item>
				<Form.Item label="Pause Limit" required>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};
