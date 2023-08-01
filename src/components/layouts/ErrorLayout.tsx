import React from "react";
import { Card } from "antd";
import type { TLayoutProps } from "@/types/layouts";

export const ErrorLayout: React.FC<TLayoutProps> = (props) => {
	return (
		<div className="error-wrapper">
			<div className="error-wrapper__header"></div>
			<div className="error-wrapper__content">
				<div className="card-container">
					<Card>{props.children}</Card>
				</div>
			</div>
		</div>
	);
};
