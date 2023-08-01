export const formatInputName = (label: string): string => {
	return label.replaceAll(" ", "-").toLowerCase();
};
