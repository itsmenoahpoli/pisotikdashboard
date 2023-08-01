import React from "react";
import { Space, Button } from "antd";

type TWanDetailsProps = {
	hideButton?: boolean;
	handleShowForm?: (isShow: boolean) => void;
};

export const WanDetails: React.FC<TWanDetailsProps> = (props) => {
	return (
		<Space direction="vertical" size={0}>
			<p>WAN Type: Dynamic</p>
			<p>IP Address: 192.168.1.1</p>
			<p>Gateway: 192.168.1.2</p>
			<p>Subnet Mask: 255.255.255.0</p>
			<p>DNS Server 1: 8.8.8.8</p>
			<p>DNS Server 2: 8.0.8.0</p>

			<Button
				size="large"
				type="primary"
				onClick={() =>
					props.handleShowForm ? props.handleShowForm(true) : null
				}
				hidden={props.hideButton}
			>
				Edit Configuration
			</Button>
		</Space>
	);
};
