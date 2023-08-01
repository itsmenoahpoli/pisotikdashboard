import React from "react";
import { Button, Space } from "antd";
import {
	IoTrashOutline,
	IoCashOutline,
	IoReloadOutline,
	IoAddCircleOutline,
} from "react-icons/io5";

type TTableHeaderButtons = {
	handleAddRate: (bool: boolean) => void;
	handleSetCurrency: (bool: boolean) => void;
};

export const TableHeaderButtons: React.FC<TTableHeaderButtons> = (props) => {
	return (
		<Space direction="horizontal" size={15}>
			<Button>
				<IoTrashOutline />
				Edit
			</Button>
			<Button>
				<IoTrashOutline />
				Delete
			</Button>
			<Button type="primary" onClick={() => props.handleSetCurrency(true)}>
				<IoCashOutline />
				Set Currency
			</Button>
			<Button type="primary" onClick={() => props.handleAddRate(true)}>
				<IoAddCircleOutline />
				Add Rate
			</Button>
			<Button>
				<IoReloadOutline />
				Reload
			</Button>
		</Space>
	);
};
