export const detectEnvironment = () => {
	let host: string = window.location.hostname;

	if (host.includes("local")) return "local";
	if (host.includes("test")) return "test";
	if (host.includes("staging")) return "staging";
	if (host.includes("uat")) return "uat";

	return "production";
};
