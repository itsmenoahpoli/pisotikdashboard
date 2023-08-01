import React from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
	TableHeaderButtons,
	VoucherForm,
} from "@/components/modules/hotspot/vouchers";

type TTableColumn = {
	key: React.Key;
	voucher: string;
	mac: string;
	amount: string;
	time_limit: string;
	time_validity: string;
	date_activated: string;
};

const COLUMNS: ColumnsType<TTableColumn> = [
	{
		dataIndex: "voucher",
		title: "Voucher",
	},
	{
		dataIndex: "mac",
		title: "MAC",
		render: (v) => {
			return !v ? <Tag color="yellow">None</Tag> : v;
		},
	},
	{
		dataIndex: "amount",
		title: "Amount (Php)",
	},
	{
		dataIndex: "time_limit",
		title: "Time Limit",
	},
	{
		dataIndex: "time_validity",
		title: "Time Validity",
	},
	{
		dataIndex: "pause_limit",
		title: "Pause Limit",
		render: (v) => {
			return v === "unlimited" ? (
				<Tag color="green">Unlimited</Tag>
			) : (
				<Tag color="yellow">Limited</Tag>
			);
		},
	},
	{
		dataIndex: "date_activated",
		title: "Date Activated",
	},
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		voucher: "vkBDI8917",
		mac: "00:00:5e:00:53:af",
		amount: "800",
		time_limit: "0:00:00",
		time_validity: "0:00:00",
		date_activated: "07/25/2023 0:00:00",
	},
];

export const VouchersManageTab: React.FC = () => {
	const [showForm, setShowForm] = React.useState<boolean>(false);

	const handleFormSubmit = () => {
		//
	};

	return (
		<div className="datatable-container">
			<div className="header">
				<h3>Hotspot Rates </h3>

				<div className="buttons-container">
					<TableHeaderButtons handleGenerateVoucher={setShowForm} />
				</div>
			</div>
			<div className="body">
				<VoucherForm
					show={showForm}
					handleShow={setShowForm}
					handeVoucherFormSubmit={handleFormSubmit}
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
