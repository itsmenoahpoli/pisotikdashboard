import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TableHeaderButtons } from "@/components/modules/pppoe/online";

type TTableColumn = {
	key: React.Key;
	username: string;
	date_connected: string;
};

const COLUMNS: ColumnsType<TTableColumn> = [
	{
		dataIndex: "username",
		title: "Username",
	},
	{
		dataIndex: "date_connected",
		title: "Date Connected",
	},
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		username: "itsmenoahpoli",
		date_connected: "07/25/2023 0:00:00",
	},
	{
		key: "2",
		username: "alnassq",
		date_connected: "07/25/2023 0:00:00",
	},
	{
		key: "3",
		username: "qwertyuioo",
		date_connected: "07/25/2023 0:00:00",
	},
];

export const OnlineAccountsManageTab: React.FC = () => {
	return (
		<div className="datatable-container">
			<div className="header">
				<h3>Online Accounts</h3>

				<div className="buttons-container">
					<TableHeaderButtons />
				</div>
			</div>
			<div className="body">
				<Table
					rowSelection={{ type: "checkbox" }}
					pagination={{ position: ["bottomRight"] }}
					scroll={{ x: "max-content" }}
					columns={COLUMNS}
					dataSource={DATA}
				/>
			</div>
		</div>
	);
};
