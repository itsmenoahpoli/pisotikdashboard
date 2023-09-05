import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Avatar, Button, Modal, Divider } from "antd";
import { IoMenu } from "react-icons/io5";
import { ROUTES } from "@/router";
import type { TRoute } from "@/types/route";

type TAppHeaderProps = {
	meta: TRoute["meta"];
};

export const AppHeader: React.FC<TAppHeaderProps> = (props) => {
	const [showNavModal, setShowNavModal] = React.useState<boolean>(false);

	const breadcrumbItems = [
		{
			title: "App",
		},
		{
			title: props.meta?.sidebar.label,
		},
	];

	const toggleNavModal = () => {
		setShowNavModal((prevState) => !prevState);
	};

	return (
		<React.Fragment>
			<Modal open={showNavModal} onCancel={toggleNavModal} footer={null}>
				<p>Dashboard Navigation</p>
				<Divider />
				<div className="modal-mobile-nav">
					{ROUTES.filter((s) => s.meta?.sidebar.isShown === true).map((r) => (
						<Link key={`btn-sidebar-${r.name}`} to={r.path}>
							<span className="icon">{r.meta?.sidebar.icon}</span>
							<span className="label">{r.meta?.sidebar.label}</span>
						</Link>
					))}
				</div>
			</Modal>

			<div className="app-header">
				<div className="main-nav">
					<Button className="btn-mobile-nav" onClick={toggleNavModal}>
						<IoMenu />
					</Button>
					<Avatar size="large">RS</Avatar>
				</div>
				<div className="sub-nav">
					<Breadcrumb items={breadcrumbItems} />
				</div>
			</div>
		</React.Fragment>
	);
};
