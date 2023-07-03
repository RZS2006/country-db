export const convertBoolToStr = (boolean) => {
	return boolean ? 'Yes' : 'No';
};

export const capitalizeStr = (string) => {
	if (typeof string !== 'string') return string;

	return string.charAt(0).toUpperCase() + string.slice(1);
};
