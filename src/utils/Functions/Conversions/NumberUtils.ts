export const isNotFiniteNumber = (value: unknown): boolean => {
	return typeof value !== 'number' || !Number.isFinite(value);
};

export const isFiniteNumber = (value: unknown): value is number => {
	return typeof value === 'number' && Number.isFinite(value);
};
