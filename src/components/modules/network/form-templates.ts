type TFormInput = { label: string };

export const WAN_FORM_TEMPLATES: {
	dynamic: [];
	static: Array<TFormInput>;
	pppoe: Array<TFormInput>;
} = {
	dynamic: [],
	static: [
		{
			label: "Static IP Address",
		},
		{
			label: "Gateway",
		},
		{
			label: "Subnet Mask",
		},
		{
			label: "DNS Server 1",
		},
		{
			label: "DNS Server 2",
		},
	],
	pppoe: [
		{
			label: "PPPoE Username",
		},
		{
			label: "PPPoE Password",
		},
	],
};

export const HOTSPOT_FORM_TEMPLATE: Array<TFormInput> = [
	{
		label: "IP Address",
	},
	{
		label: "Subnet Mask",
	},
];

export const PPPOE_FORM_TEMPLATE: Array<TFormInput> = [
	{
		label: "IP Address",
	},
	...WAN_FORM_TEMPLATES.static.filter(
		(x) => x.label !== "Gateway" && x.label !== "Static IP Address"
	),
];
