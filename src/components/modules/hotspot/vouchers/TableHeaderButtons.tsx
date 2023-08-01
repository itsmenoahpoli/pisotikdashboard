import React from "react";
import { Button, Space } from "antd";
import {
	IoTrashOutline,
	IoReloadOutline,
	IoAddCircleOutline,
} from "react-icons/io5";

type TTableHeaderButtons = {
	handleGenerateVoucher: (bool: boolean) => void;
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
			<Button type="primary" onClick={() => props.handleGenerateVoucher(true)}>
				<IoAddCircleOutline />
				Generate Voucher
			</Button>
			<Button>
				<IoReloadOutline />
				Reload
			</Button>
		</Space>
	);
};
