import React from "react";
import { Breadcrumb, Avatar } from "antd";
import type { TRoute } from "@/types/route";

type TAppHeaderProps = {
	meta: TRoute["meta"];
};

export const AppHeader: React.FC<TAppHeaderProps> = (props) => {
	const breadcrumbItems = [
		{
			title: "App",
		},
		{
			title: props.meta?.sidebar.label,
		},
	];

	return (
		<div className="app-header">
			<div className="main-nav">
				<Avatar size="large">RS</Avatar>
			</div>
			<div className="sub-nav">
				<Breadcrumb items={breadcrumbItems} />
			</div>
		</div>
	);
};
