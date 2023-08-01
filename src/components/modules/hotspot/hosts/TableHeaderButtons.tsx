import React from "react";
import { Button, Space } from "antd";
import {
	IoTrashOutline,
	IoArrowForwardOutline,
	IoBanOutline,
	IoReloadOutline,
} from "react-icons/io5";

type TTableHeaderButtons = {};

export const TableHeaderButtons: React.FC<TTableHeaderButtons> = (props) => {
	console.log(props)
	return (
		<Space direction="horizontal" size={15}>
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
			<Button>
				<IoReloadOutline />
				Reload
			</Button>
		</Space>
	);
};
