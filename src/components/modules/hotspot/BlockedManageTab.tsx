import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
	TableHeaderButtons,
	BlockDeviceForm,
} from "@/components/modules/hotspot/blocked";

type TTableColumn = {
	key: React.Key;
	mac: string;
	date_added: string;
};

const COLUMNS: ColumnsType<TTableColumn> = [
	{
		dataIndex: "mac",
		title: "MAC",
	},
	{
		dataIndex: "date_added",
		title: "Date Added",
	},
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		mac: "00:00:5e:00:53:af",
		date_added: "07/26/2023",
	},
];

export const BlockedManageTab: React.FC = () => {
	const [showForm, setShowForm] = React.useState<boolean>(false);

	const handleBlockDeviceUserFormSubmit = () => {
		//
	};

	return (
		<div className="datatable-container">
			<div className="header">
				<h3>Hotspot Blocked Devices </h3>

				<div className="buttons-container">
					<TableHeaderButtons handleBlockDeviceUser={setShowForm} />
				</div>
			</div>
			<div className="body">
				<BlockDeviceForm
					show={showForm}
					handleShow={setShowForm}
					handleFormSubmit={handleBlockDeviceUserFormSubmit}
				/>
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
