import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "@/router";

export const AppSidebar: React.FC = () => {
	const location = useLocation();

	const isActive = (path: string): Boolean => {
		return location.pathname === path;
	};

	return (
		<React.Fragment>
			<div className="head-container">
				<h1>PISOTIK WIFI</h1>
			</div>
			<div className="body-container">
				<div className="sidebar-buttons">
					{ROUTES.filter((s) => s.meta?.sidebar.isShown === true).map((r) => (
						<Link
							key={`btn-sidebar-${r.name}`}
							to={r.path}
							className={`${isActive(r.path) ? "active" : ""}`}
						>
							<span className="icon">{r.meta?.sidebar.icon}</span>
							<span className="label">{r.meta?.sidebar.label}</span>
						</Link>
					))}
				</div>
			</div>
			<div className="footer-container"></div>
		</React.Fragment>
	);
};
