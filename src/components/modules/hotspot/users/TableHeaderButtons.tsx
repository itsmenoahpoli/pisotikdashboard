import React from "react";
import { Button, Space } from "antd";
import {
	IoPencil,
	IoTrashOutline,
	IoArrowForwardOutline,
	IoBanOutline,
	IoAddCircleOutline,
	IoReloadOutline,
} from "react-icons/io5";

type TTableHeaderButtons = {
	handleAddUser: (bool: boolean) => void;
};

export const TableHeaderButtons: React.FC<TTableHeaderButtons> = (props) => {
	return (
		<Space direction="horizontal" size={15}>
			<Button>
				<IoPencil /> Edit
			</Button>
			<Button>
				<IoTrashOutline />
				Delete
			</Button>
			<Button>
				<IoArrowForwardOutline />
				Bypass
			</Button>
			<Button>
				<IoBanOutline />
				Blocked
			</Button>
			<Button type="primary" onClick={() => props.handleAddUser(true)}>
				<IoAddCircleOutline />
				Add User
			</Button>
			<Button>
				<IoReloadOutline />
				Reload
			</Button>
		</Space>
	);
};
