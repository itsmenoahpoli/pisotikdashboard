import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TableHeaderButtons } from "@/components/modules/pppoe/disabled";

type TTableColumn = {
	key: React.Key;
	username: string;
	date_connected: string;
	date_disabled: string;
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
	{
		dataIndex: "date_disabled",
		title: "Date Disabled",
	},
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		username: "itsmenoahpoli",
		date_connected: "07/25/2023 0:00:00",
		date_disabled: "07/25/2023 0:00:00",
	},
	{
		key: "2",
		username: "alnassq",
		date_connected: "07/25/2023 0:00:00",
		date_disabled: "07/25/2023 0:00:00",
	},
	{
		key: "3",
		username: "qwertyuioo",
		date_connected: "07/25/2023 0:00:00",
		date_disabled: "07/25/2023 0:00:00",
	},
];

export const DisabledAccountsManageTab: React.FC = () => {
	return (
		<div className="datatable-container">
			<div className="header">
				<h3>Disabled Accounts</h3>

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
