import React from "react";
import { Button, Space } from "antd";
import { IoRefreshSharp, IoReloadOutline } from "react-icons/io5";

export const TableHeaderButtons: React.FC = () => {
	return (
		<Space direction="horizontal" size={15}>
			<Button type="primary">
				<IoRefreshSharp /> Restore
			</Button>
			<Button>
				<IoReloadOutline />
				Reload
			</Button>
		</Space>
	);
};
