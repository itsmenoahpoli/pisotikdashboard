import React from "react";
import { Modal, Form, Input } from "antd";

type TBypassForm = {
	show: boolean;
	handleShow: (bool: boolean) => void;
	handleBypassUserFormSubmit: (MACAddress: string) => void;
};

export const BypassForm: React.FC<TBypassForm> = (props) => {
	return (
		<Modal
			open={props.show}
			title="Bypass Device"
			okText="Submit"
			onCancel={() => props.handleShow(false)}
		>
			<Form layout="vertical" onFinish={props.handleBypassUserFormSubmit}>
				<Form.Item label="MAC Address" required>
					<Input placeholder="Device MAC Address" />
				</Form.Item>
			</Form>
		</Modal>
	);
};
