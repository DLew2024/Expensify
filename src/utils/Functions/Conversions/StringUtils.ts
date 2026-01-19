export const convertPriceToString = (price: number): string => {
	return `$${price.toFixed(2)}`;
};
