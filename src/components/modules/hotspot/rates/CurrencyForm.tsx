import React from "react";
import { Modal, Form, Input } from "antd";

type TRatesForm = {
	show: boolean;
	handleShow: (bool: boolean) => void;
	handeCurrencyFormSubmit: (rates: any) => void;
};

export const CurrencyForm: React.FC<TRatesForm> = (props) => {
	return (
		<Modal
			open={props.show}
			title="Set Currency"
			okText="Submit"
			onCancel={() => props.handleShow(false)}
		>
			<Form layout="vertical" onFinish={props.handeCurrencyFormSubmit}>
				<Form.Item label="Currency" required>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};
