import React from "react";
import { Table, Tag } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import type { ColumnsType } from "antd/es/table";
import { StatusLabel } from "@/components";
import { TableHeaderButtons } from "@/components/modules/hotspot/hosts";

type TTableColumn = {
	key: React.Key;
	username: string;
	mac: string;
	security_code: string | null;
	status: string;
	remaining_time: string;
	time_validity: string;
	pause_limit: string;
	last_active: string;
};

const COLUMNS: ColumnsType<TTableColumn> = [
	{
		dataIndex: "username",
		title: "Username",
	},
	{
		dataIndex: "mac",
		title: "MAC",
	},
	{
		dataIndex: "security_code",
		title: "Security Code",
		render: (v) => {
			return v !== null ? (
				<Tag>
					<IoEyeOutline />
					View
				</Tag>
			) : (
				<Tag color="orange">None</Tag>
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
		dataIndex: "remaining-time",
		title: "Remaining Time",
	},
	{
		dataIndex: "time_validity",
		title: "Time Validity",
	},
	{
		dataIndex: "pause_limit",
		title: "Pause Limit",render: (v) => {
			return v !== null ? (
				<Tag color="green">  
					Unlimited
				</Tag>
			) : (
				<Tag color="orange">None</Tag>
			);
		},
	},
	{
		dataIndex: "last_active",
		title: "Last Active",
	},
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		username: "00:00:5e:00:53:af",
		mac: "00:00:5e:00:53:af",
		security_code: "12345",
		status: "active",
		remaining_time: "0:00:00",
		time_validity: "07/25/2023 0:00:00",
		pause_limit: "unlimited",
		last_active: "07/25/2023 0:00:00",
	},
];

export const HostsManageTab: React.FC = () => {
	return (
		<div className="datatable-container">
			<div className="header">
				<h3>Hotspot Hosts</h3>

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
