import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import { ErrorLayout } from "@/components";

export const ErrorPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<ErrorLayout>
			<Result
				status="error"
				title="Page Not Found"
				subTitle="This page doesn't exist"
				extra={
					<Button type="primary" onClick={() => navigate("/")}>
						Go to dashboard
					</Button>
				}
			/>
		</ErrorLayout>
	);
};
