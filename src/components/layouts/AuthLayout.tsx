import React from "react";
import type { TLayoutProps } from "@/types/layouts";

export const AuthLayout: React.FC<TLayoutProps> = (props) => {
	return (
		<div className="auth-wrapper">
			<div className="auth-wrapper-card">
				{props.children}

				<div className="bottom-container">
					<p>All Rights Reserved. Netclick Technologies 2023</p>
				</div>
			</div>
		</div>
	);
};
