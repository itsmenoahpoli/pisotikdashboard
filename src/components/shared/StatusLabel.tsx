import React from "react";

type TStatusLabel = { status: "active" | "connected" | "offline" };

export const StatusLabel: React.FC<TStatusLabel> = (props) => {
	return (
		<div className="status-label">
			<div className={`status-label-circle ${props.status}`} />
			<div className="status-label-text">{props.status}</div>
		</div>
	);
};
