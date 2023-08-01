import { mountStoreDevtool } from "simple-zustand-devtools";
import { useAuthStore } from "@/store/modules/auth.store";
import { detectEnvironment } from "@/utilities";

if (detectEnvironment() === "production") {
	mountStoreDevtool("auth-store", useAuthStore);
}

export { useAuthStore };
