import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store";

export const withAuth =
	<P extends object>(WrappedComponent: React.ComponentType<P>) =>
	(props: P) => {
		const { IS_AUTHENTICATED } = useAuthStore();

		if (!IS_AUTHENTICATED()) {
			return <Navigate to="/login" />;
		}

		return <WrappedComponent {...props} />;
	};
