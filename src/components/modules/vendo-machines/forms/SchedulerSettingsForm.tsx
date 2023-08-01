import React from "react";
import { Form, Input, Switch, Row, Col, Button } from "antd";

type TSchedulerSettingsFormProps = {
	handleSchedulerSettingsFormSubmit: (schedulerSettings: any) => void;
};

export const SchedulerSettingsForm: React.FC<TSchedulerSettingsFormProps> = (
	props
) => {
	return (
		<Form
			layout="vertical"
			style={{ width: "600px" }}
			onFinish={props.handleSchedulerSettingsFormSubmit}
		>
			<Form.Item label="Enable Night Light Scheduler">
				<Switch checkedChildren="On" unCheckedChildren="Off" />
			</Form.Item>
			<Form.Item>
				<Row gutter={15}>
					<Col span={8}>
						<Form.Item label="Lights On Time: Hour">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Minute">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Second">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
				</Row>
			</Form.Item>

			<Form.Item>
				<Row gutter={15}>
					<Col span={8}>
						<Form.Item label="Lights Off Time: Hour">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Minute">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Second">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
				</Row>
			</Form.Item>

			<Button type="primary">Save Configuration</Button>
		</Form>
	);
};
