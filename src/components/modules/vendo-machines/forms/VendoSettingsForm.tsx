import React from "react";
import { Form, Input, Switch, Select, Row, Col, Button } from "antd";

type TVendoSettingsFormProps = {
	handleVendoSettingsFormSubmit: (vendoSettings: any) => void;
};

const OPTIONS_TOGGLE = [
	{
		label: "Enabled",
		value: "enabled",
	},
	{
		label: "Disabled",
		value: "disabled",
	},
];

const OPTIONS_TOGGLE_2 = [
	{
		label: "Open",
		value: "open",
	},
	{
		label: "Close",
		value: "close",
	},
];

export const VendoSettingsForm: React.FC<TVendoSettingsFormProps> = (props) => {
	return (
		<Form
			layout="vertical"
			style={{ width: "600px" }}
			onFinish={props.handleVendoSettingsFormSubmit}
		>
			<Form.Item label="Enable Hotspot Vendo">
				<Switch checkedChildren="On" unCheckedChildren="Off" />
			</Form.Item>
			<Form.Item label="Enable Hotspot Vendo">
				<Input defaultValue="Main Vendo" />
			</Form.Item>
			<Form.Item>
				<Row gutter={15}>
					<Col span={12}>
						<Form.Item label="Button Pin">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label="Button Pull-up resistor">
							<Select
								options={OPTIONS_TOGGLE}
								defaultValue="enabled"
								getPopupContainer={(trigger) => trigger.parentNode}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form.Item>
			<Form.Item>
				<Row gutter={15}>
					<Col span={12}>
						<Form.Item label="Coin Acceptor Pin">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label="Coin Pull-up resistor">
							<Select
								options={OPTIONS_TOGGLE}
								defaultValue="enabled"
								getPopupContainer={(trigger) => trigger.parentNode}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form.Item>
			<Form.Item>
				<Row gutter={15}>
					<Col span={12}>
						<Form.Item label="Coin Relay Pin">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label="Coin Relay State">
							<Select
								options={OPTIONS_TOGGLE_2}
								defaultValue="close"
								getPopupContainer={(trigger) => trigger.parentNode}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form.Item>
			<Form.Item>
				<Row gutter={15}>
					<Col span={12}>
						<Form.Item label="Bill Acceptor Pin">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label="Bill Pull-up resistor">
							<Select
								options={OPTIONS_TOGGLE}
								defaultValue="enabled"
								getPopupContainer={(trigger) => trigger.parentNode}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form.Item>
			<Form.Item>
				<Row gutter={15}>
					<Col span={12}>
						<Form.Item label="Bill Relay Pin">
							<Input placeholder="0" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label="Bill Relay State">
							<Select
								options={OPTIONS_TOGGLE_2}
								defaultValue="close"
								getPopupContainer={(trigger) => trigger.parentNode}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form.Item>

			<Button type="primary">Save Configuration</Button>
		</Form>
	);
};
