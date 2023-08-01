import React from "react";
import { Space, Tag } from "antd";

export const WanStatus: React.FC = () => {
	const status: string = "link";

	return (
		<Space direction="vertical" size={0}>
			<p>
				Status: &nbsp;
				{status === "link" ? (
					<Tag color="green">Active</Tag>
				) : (
					<Tag color="red">No Link</Tag>
				)}
			</p>
			<p>
				WAN TX: &nbsp; <Tag color="geekblue"> 10.5 Mbps</Tag>
			</p>
			<p>
				WAN RX: &nbsp; <Tag color="orange"> 7 Mbps</Tag>
			</p>
		</Space>
	);
};
