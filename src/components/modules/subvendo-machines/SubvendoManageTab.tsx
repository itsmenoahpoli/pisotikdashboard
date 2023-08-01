import React from "react";
import { Table, Button } from 'antd'
import type { ColumnsType } from "antd/es/table";
import { StatusLabel } from "@/components";
import { TableHeaderButtons } from "@/components/modules/subvendo-machines/subvendo";

type TTableColumn = {
	key: React.Key;
	name: string
	mac: string
	status: string
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
		dataIndex: "status",
		title: "Status",
		render: (v) => <StatusLabel status={v} />
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
		render: () => <Button type="primary">Manage</Button>
	}
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		name: "Subvendo #1",
		mac: "52:82:92:D7:5C",
		status: "online",
		interface: "WLAN",
		connectivity: "94%",
		update_time: "17h:32m:02s",
	},
];

export const SubvendoManageTab: React.FC = () => {
	return (
		<div className="datatable-container">
			<div className="header">
				<h3>Sub Vendo</h3>

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
