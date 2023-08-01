import React from "react";
import { Button, Space } from "antd";
import {
	IoPencil,
	IoTrashOutline,
	IoBanOutline,
	IoAddCircleOutline,
	IoReloadOutline,
} from "react-icons/io5";

export const TableHeaderButtons: React.FC = () => {
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
				<IoBanOutline />
				Disable
			</Button>
			<Button type="primary">
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
