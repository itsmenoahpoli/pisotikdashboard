import React from "react";

type TAppContentProps = {
	children: React.ReactNode;
};

export const AppContent: React.FC<TAppContentProps> = (props) => {
	return <div className="app-content">{props.children}</div>;
};
