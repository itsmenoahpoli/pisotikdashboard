import React from "react";
import { Card, Divider, List } from "antd";

type TSpecsData = {
	ip: string;
	downloadSpeed: number;
	uploadSpeed: number;
};

type TSpecsInformationProps = {
	specsInfo: {
		wan: TSpecsData;
		hotspot: TSpecsData;
		pppoe: TSpecsData;
	};
};

export const SpecsInformation: React.FC<TSpecsInformationProps> = (props) => {
	const formatListData = (data: TSpecsData) => {
		return [
			`IP Address: ${data.ip}`,
			`Download: ${data.downloadSpeed} Mbps`,
			`Upload: ${data.uploadSpeed} Mbps`,
		];
	};

	return (
		<Card>
			<h3>WAN &nbsp;&mdash;&nbsp; Hotspot &nbsp;&mdash;&nbsp; PPPoE</h3>
			<Divider style={{ marginBottom: 0 }} />

			<List
				header={<h3>WAN Interface</h3>}
				dataSource={formatListData(props.specsInfo.wan)}
				renderItem={(i) => <List.Item>{i}</List.Item>}
			/>

			<List
				header={<h3>Hotspot Interface</h3>}
				dataSource={formatListData(props.specsInfo.hotspot)}
				renderItem={(i) => <List.Item>{i}</List.Item>}
			/>

			<List
				header={<h3>PPPoE Interface</h3>}
				dataSource={formatListData(props.specsInfo.pppoe)}
				renderItem={(i) => <List.Item>{i}</List.Item>}
			/>
		</Card>
	);
};
