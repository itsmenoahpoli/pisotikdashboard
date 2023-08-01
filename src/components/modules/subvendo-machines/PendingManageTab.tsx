import React from "react";
import { Table, Button } from 'antd'
import type { ColumnsType } from "antd/es/table";
import { TableHeaderButtons } from "@/components/modules/subvendo-machines/pending";

type TTableColumn = {
	key: React.Key;
	name: string
	mac: string
	interface: string
	connectivity: string
	update_time: string
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
		dataIndex: "interface",
		title: "Interface",
	},
	{
		dataIndex: "connectivity",
		title: "Connectivity",
	},
	{
		dataIndex: "update_time",
		title: "Update Time",
	},
	{
		dataIndex: 'id',
		title: 'Action',
		render: (v) => <Button type="primary">Manage</Button>
	}
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		name: "ESP8266",
		mac: "52:82:92:D7:5C",
		interface: "WLAN",
		connectivity: "94%",
		update_time: "17h:32m:02s",
	},
];

export const PendingManageTab: React.FC = () => {
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
