import React from "react";
import _ from "lodash";
import { Form, Input, Select, Button, Space } from "antd";
import { WanDetails } from "@/components/modules/network/wan";
import { WAN_FORM_TEMPLATES } from "@/components/modules/network";
import { formatInputName } from "@/utilities";
import type { TWanFormTypes } from "@/types/components/modules/wan";

const WAN_OPTIONS = ["dynamic", "static", "pppoe"].map((w) => ({
	value: w,
	label: w === "pppoe" ? "PPPoE" : _.capitalize(w),
}));

type TWanFormProps = {
	formType: TWanFormTypes;
	handleChangeFormType: (formType: TWanFormTypes) => void;
	handleResetForm: () => void;
};

export const WanForm: React.FC<TWanFormProps> = (props) => {
	return (
		<Form layout="vertical" size="large" requiredMark>
			<Form.Item label="Select WAN type">
				<Select
					options={WAN_OPTIONS}
					getPopupContainer={(trigger) => trigger.parentNode}
					onChange={(val: TWanFormTypes) => props.handleChangeFormType(val)}
					placeholder="Select configuration"
				/>
			</Form.Item>

			{props.formType === "dynamic" ? <WanDetails hideButton /> : null}

			{WAN_FORM_TEMPLATES[props.formType].map((i) => (
				<Form.Item
					label={i.label}
					name={formatInputName(i.label)}
					key={`input-${formatInputName(i.label)}`}
					required
				>
					<Input />
				</Form.Item>
			))}

			<Space direction="horizontal" size={8}>
				<Button type="primary">Save</Button>

				<Button type="default" onClick={() => props.handleResetForm()}>
					Cancel
				</Button>
			</Space>
		</Form>
	);
};
