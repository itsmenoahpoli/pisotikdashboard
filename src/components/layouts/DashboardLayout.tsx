import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import { withAuth } from "@/hoc";
import { getRouteMeta } from "@/utilities";
import {
	AppSidebar,
	AppHeader,
	AppContent,
} from "@/components/layouts/dashboard-contents";
import type { TLayoutProps } from "@/types/layouts";

export const DashboardLayout: React.FC<TLayoutProps> = withAuth((props) => {
	const location = useLocation();
	const { meta } = getRouteMeta(location.pathname)!;

	return (
		<Layout className="dashboard-wrapper" hasSider={true}>
			<Layout.Sider className="dashboard-wrapper__sidebar" width={260}>
				<AppSidebar />
			</Layout.Sider>
			<Layout.Content className="dashboard-wrapper__main">
				<div className="dashboard-wrapper__main-page-content">
					<AppHeader meta={meta} />
					<AppContent children={props.children} />

					<div style={{ height: "50px" }} />
				</div>
			</Layout.Content>
		</Layout>
	);
});
