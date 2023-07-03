export const convertBoolToStr = (boolean) => {
	return boolean ? 'Yes' : 'No';
};

export const capitalizeStr = (string) => {
	if (typeof string !== 'string') return string;

	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getRelevancy = (target, query) => {
	if (query === target) {
		return 2;
	} else if (target.startsWith(query)) {
		return 1;
	} else if (target.includes(query)) {
		return 0;
	} else {
		return -1;
	}
};
