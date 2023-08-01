import React from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
	TableHeaderButtons,
	RatesForm,
	CurrencyForm,
} from "@/components/modules/hotspot/rates";

type TTableColumn = {
	key: React.Key;
	amount: string;
	time_limit: string;
	time_validity: string;
	pause_limit: string;
};

const COLUMNS: ColumnsType<TTableColumn> = [
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
];

const DATA: Array<TTableColumn> = [
	{
		key: "1",
		amount: "800",
		time_limit: "0:00:00",
		time_validity: "0:00:00",
		pause_limit: "unlimited",
	},
];

export const RatesManageTab: React.FC = () => {
	const [showForm, setShowForm] = React.useState<boolean>(false);
	const [showCurrencyForm, setShowCurrencyForm] =
		React.useState<boolean>(false);

	const handleFormSubmit = () => {
		//
	};

	const handleCurrencyFormSubmit = () => {
		//
	};

	return (
		<div className="datatable-container">
			<div className="header">
				<h3>Hotspot Rates </h3>

				<div className="buttons-container">
					<TableHeaderButtons
						handleAddRate={setShowForm}
						handleSetCurrency={setShowCurrencyForm}
					/>
				</div>
			</div>
			<div className="body">
				<RatesForm
					show={showForm}
					handleShow={setShowForm}
					handeRatesFormSubmit={handleFormSubmit}
				/>
				<CurrencyForm
					show={showCurrencyForm}
					handleShow={setShowCurrencyForm}
					handeCurrencyFormSubmit={handleCurrencyFormSubmit}
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
