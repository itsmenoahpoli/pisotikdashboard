import React from "react";
import { Button, Space } from "antd";
import { IoCloseCircleOutline, IoReloadOutline } from "react-icons/io5";

export const TableHeaderButtons: React.FC = () => {
	return (
		<Space direction="horizontal" size={15}>
			<Button>
				<IoCloseCircleOutline /> Disconnect
			</Button>
			<Button>
				<IoReloadOutline />
				Reload
			</Button>
		</Space>
	);
};
