import React from "react";
import { Button, Space } from "antd";
import {
	IoTrashOutline,
	IoBanOutline,
	IoReloadOutline,
} from "react-icons/io5";

export const TableHeaderButtons: React.FC = () => {
	return (
		<Space direction="horizontal" size={15}>
			<Button>
				<IoTrashOutline />
				Delete
			</Button>
			<Button>
				<IoBanOutline />
				Block
			</Button>
			<Button>
				<IoReloadOutline />
				Reload
			</Button>
		</Space>
	);
};
