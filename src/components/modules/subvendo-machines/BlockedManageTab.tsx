import React from "react";
import { Table } from 'antd'
import type { ColumnsType } from "antd/es/table";
import { TableHeaderButtons } from "@/components/modules/subvendo-machines/blocked";

type TTableColumn = {
	key: React.Key;
	name: string
	mac: string
	date_blocked: string
};

const COLUMNS: ColumnsType<TTableColumn> = [
	{
		dataIndex: "name",
		title: "Name",
	},

	{
		dataIndex: "mac",
		title: "mac",
	},
	{
		dataIndex: "date_blocked",
		title: "Date Blocked",
	},
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		name: "ESP8266",
		mac: "52:82:92:D7:5C",
		date_blocked: "07/25/2023 0:00:00",
	},
];

export const BlockedManageTab: React.FC = () => {
	return (
		<div className="datatable-container">
			<div className="header">
				<h3>Pending Sub Vendo</h3>

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
