import React from "react";
import { Row, Col, Card } from "antd";
import { IoCaretUpOutline, IoCaretDownOutline } from "react-icons/io5";

type TSalesCardProps = {
	type: "daily" | "weekly" | "monthly" | "annual";
	sales: { value: number; reportPercentage: number };
};

const SalesCard: React.FC<TSalesCardProps> = (props) => {
	const formatAmount = (amount: number): string => {
		return amount.toLocaleString("en-US", { minimumFractionDigits: 2 });
	};

	const isNegative = (value: number): Boolean => {
		return Boolean(Math.sign(value) === -1);
	};

	const getFooterLabel = (salesType: TSalesCardProps["type"]): string => {
		switch (salesType) {
			case "daily":
				return "Yesterday";
			case "weekly":
				return "Last Week";
			case "monthly":
				return "Last Month";
			case "annual":
				return "Last Year";

			default:
				return "";
		}
	};

	return (
		<Card className="sales-card">
			<h4>
				<span className="capitalize">{props.type}</span> Sales
			</h4>

			<div className="amount-container">
				<h3>Php {formatAmount(props.sales.value)}</h3>

				{isNegative(props.sales.value) ? (
					<small className="indicate indicate-decrease">
						<IoCaretDownOutline /> - {props.sales.reportPercentage}%
					</small>
				) : (
					<small className="indicate indicate-increase">
						<IoCaretUpOutline /> {props.sales.reportPercentage}%
					</small>
				)}
			</div>

			<h5>
				{getFooterLabel(props.type)}: {formatAmount(8273.2927)}
			</h5>
		</Card>
	);
};

export const SalesReport: React.FC = () => {
	return (
		<Row gutter={20}>
			<Col span={6}>
				<SalesCard
					type="daily"
					sales={{
						value: 129,
						reportPercentage: 23,
					}}
				/>
			</Col>
			<Col span={6}>
				<SalesCard
					type="weekly"
					sales={{
						value: 748,
						reportPercentage: -23,
					}}
				/>
			</Col>
			<Col span={6}>
				<SalesCard
					type="monthly"
					sales={{
						value: 15922,
						reportPercentage: 23,
					}}
				/>
			</Col>
			<Col span={6}>
				<SalesCard
					type="annual"
					sales={{
						value: 147920,
						reportPercentage: -23,
					}}
				/>
			</Col>
		</Row>
	);
};
