import React from "react";
import { Modal, Form, Input } from "antd";

type TBlockDeviceForm = {
	show: boolean;
	handleShow: (bool: boolean) => void;
	handleFormSubmit: (MACAddress: string) => void;
};

export const BlockDeviceForm: React.FC<TBlockDeviceForm> = (props) => {
	return (
		<Modal
			open={props.show}
			title="Block Device"
			okText="Submit"
			onCancel={() => props.handleShow(false)}
		>
			<Form layout="vertical">
				<Form.Item label="MAC Address" required>
					<Input placeholder="Device MAC Address" />
				</Form.Item>
			</Form>
		</Modal>
	);
};
