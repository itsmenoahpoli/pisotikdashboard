import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
	TableHeaderButtons,
	BypassForm,
} from "@/components/modules/hotspot/bypassed";

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

export const BypassManageTab: React.FC = () => {
	const [showForm, setShowForm] = React.useState<boolean>(false);

	const handleFormSubmit = () => {
		//
	};

	return (
		<div className="datatable-container">
			<div className="header">
				<h3>Hotspot Bypassed Devices </h3>

				<div className="buttons-container">
					<TableHeaderButtons handleBypassUser={setShowForm} />
				</div>
			</div>
			<div className="body">
				<BypassForm
					show={showForm}
					handleShow={setShowForm}
					handleBypassUserFormSubmit={handleFormSubmit}
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
