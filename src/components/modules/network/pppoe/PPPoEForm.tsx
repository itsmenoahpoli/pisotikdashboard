import React from "react";
import { Form, Input, Button } from "antd";
import { PPPOE_FORM_TEMPLATE } from "@/components/modules/network";
import { formatInputName } from "@/utilities";

type TPPPoEFormFormProps = {
	handleFormSubmit: (data: any) => void;
};

export const PPPoEForm: React.FC<TPPPoEFormFormProps> = (props) => {
	return (
		<Form layout="vertical" onFinish={props.handleFormSubmit}>
			{PPPOE_FORM_TEMPLATE.map((i) => (
				<Form.Item
					label={i.label}
					name={formatInputName(i.label)}
					key={`input-${formatInputName(i.label)}`}
					required
				>
					<Input />
				</Form.Item>
			))}

			<Button type="primary" disabled>
				Save
			</Button>
		</Form>
	);
};
