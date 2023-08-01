import React from "react";
import { Table, Tag } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import type { ColumnsType } from "antd/es/table";
import { TableHeaderButtons } from "@/components/modules/pppoe/users";
import { StatusLabel } from "@/components";

type TTableColumn = {
	key: React.Key;
	username: string;
	password: string;
	status: string;
	due_date: string;
	last_active: string;
};

const COLUMNS: ColumnsType<TTableColumn> = [
	{
		dataIndex: "username",
		title: "Username",
	},
	{
		dataIndex: "password",
		title: "Password",
		render: (v) => {
			return (
				<Tag>
					<IoEyeOutline />
					View
				</Tag>
			);
		},
	},
	{
		dataIndex: "status",
		title: "Status",
		render: (v) => {
			return <StatusLabel status={v} />;
		},
	},
	{
		dataIndex: "due_date",
		title: "Due Date",
	},
	{
		dataIndex: "last_active",
		title: "Last Active",
	},
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		username: "itsmenoahpoli",
		password: "12345678",
		status: "online",
		due_date: "07/25/2023 0:00:00",
		last_active: "07/25/2023 0:00:00",
	},
];

export const UserAccountsManageTab: React.FC = () => {
	return (
		<div className="datatable-container">
			<div className="header">
				<h3>User Accounts</h3>

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
