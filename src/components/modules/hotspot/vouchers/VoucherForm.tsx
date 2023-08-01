import React from "react";
import { Modal, Form, InputNumber, Input, Row, Col } from "antd";

type TRatesForm = {
	show: boolean;
	handleShow: (bool: boolean) => void;
	handeVoucherFormSubmit: (rates: any) => void;
};

export const VoucherForm: React.FC<TRatesForm> = (props) => {
	return (
		<Modal
			open={props.show}
			title="Generate Voucher"
			okText="Submit"
			onCancel={() => props.handleShow(false)}
		>
			<Form layout="vertical" onFinish={props.handeVoucherFormSubmit}>
				<Form.Item label="Amount (Php)" required>
					<InputNumber />
				</Form.Item>
				<Form.Item label="Time Limit" required>
					<Row gutter={5}>
						<Col span={6}>
							<InputNumber placeholder="Day" />
						</Col>
						<Col span={6}>
							<InputNumber placeholder="Hour" />
						</Col>
						<Col span={6}>
							<InputNumber placeholder="Minute" />
						</Col>
						<Col span={6}>
							<InputNumber placeholder="Second" />
						</Col>
					</Row>
				</Form.Item>
				<Form.Item label="Time Validity" required>
					<Row gutter={5}>
						<Col span={6}>
							<InputNumber placeholder="Day" />
						</Col>
						<Col span={6}>
							<InputNumber placeholder="Hour" />
						</Col>
						<Col span={6}>
							<InputNumber placeholder="Minute" />
						</Col>
						<Col span={6}>
							<InputNumber placeholder="Second" />
						</Col>
					</Row>
				</Form.Item>
				<Form.Item label="Pause Limit (1 - 1000)" required>
					<InputNumber placeholder="Example: 1000 (No pause limit)" />
				</Form.Item>
				<Form.Item label="Voucher prefix (optional)">
					<Input placeholder="Example: 1day" />
				</Form.Item>
				<Form.Item label="Number of vouchers" required>
					<InputNumber />
				</Form.Item>
			</Form>
		</Modal>
	);
};
