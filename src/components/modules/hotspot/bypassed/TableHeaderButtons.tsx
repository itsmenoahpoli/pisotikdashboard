import React from "react";
import { Button, Space } from "antd";
import { IoTrashOutline, IoAddOutline, IoReloadOutline } from "react-icons/io5";

type TTableHeaderButtons = {
	handleBypassUser: (bool: boolean) => void;
};

export const TableHeaderButtons: React.FC<TTableHeaderButtons> = (props) => {
	return (
		<Space direction="horizontal" size={15}>
			<Button>
				<IoTrashOutline />
				Delete
			</Button>
			<Button type="primary" onClick={() => props.handleBypassUser(true)}>
				<IoAddOutline />
				Bypass
			</Button>
			<Button>
				<IoReloadOutline />
				Reload
			</Button>
		</Space>
	);
};
