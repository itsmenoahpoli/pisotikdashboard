import React from "react";
import { Modal, Form, InputNumber, Row, Col, Button, Space } from "antd";

type TRatesForm = {
	show: boolean;
	handleShow: (bool: boolean) => void;
	handeRatesFormSubmit: (rates: any) => void;
};

export const RatesForm: React.FC<TRatesForm> = (props) => {
	return (
		<Modal
			open={props.show}
			title="Add Rate"
			okText="Submit"
			onCancel={() => props.handleShow(false)}
		>
			<Form layout="vertical" onFinish={props.handeRatesFormSubmit}>
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
				<Form.Item label="Pause Limit" required>
					<InputNumber />
				</Form.Item>
			</Form>
		</Modal>
	);
};
