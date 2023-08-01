import React from "react";
import { Card, Divider } from "antd";

export const HotspotUsers: React.FC = () => {
	return (
		<Card>
			<h3>Users Overview</h3>
			<Divider />

			<div className="hotspot-users-container">
				<h4>Hotspot Users</h4>
				<h2>15 Connected</h2>
				<p>Total Users: 42</p>
			</div>

			<div className="hotspot-users-container">
				<h4>PPPoE Users</h4>
				<h2>23 Online</h2>
				<p>Total Users: 15</p>
			</div>
		</Card>
	);
};
