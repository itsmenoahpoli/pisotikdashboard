import React from "react";
import { List } from "antd";

type TDeviceInformationProps = {
	device: {
		name: string;
		model: string;
		firmwareVersion: string;
		processor: string;
		memory: string;
		storage: number;
	};
};

export const DeviceInformation: React.FC<TDeviceInformationProps> = (props) => {
	const listData = [
		`Device Name: ${props.device.name}`,
		`Device model: ${props.device.model}`,
		`Firmware version: ${props.device.firmwareVersion}`,
		`Processor: ${props.device.processor}`,
		`Memory: ${props.device.memory}`,
		`Storage Disk: ${props.device.storage}GB`,
	];

	return (
		<List
			className="device-info-list"
			header={<h3>Device Information</h3>}
			dataSource={listData}
			renderItem={(i) => <List.Item>{i}</List.Item>}
			bordered
		/>
	);
};
