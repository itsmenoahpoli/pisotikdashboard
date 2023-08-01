import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ROUTER } from "@/router";

import "antd/dist/reset.css";
import "@/styles/app.scss";

const QUERY_CLIENT = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={QUERY_CLIENT}>
		<RouterProvider router={ROUTER} />
	</QueryClientProvider>
);
