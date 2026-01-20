import type { EpochSeconds } from './DateTypes';

export const FilterSortBy = {
	DATE: 'date',
	AMOUNT: 'amount',
} as const;

export type FilterSortByType = (typeof FilterSortBy)[keyof typeof FilterSortBy];

export type Filters = {
	text: string;
	sortBy: FilterSortByType;
	startDate?: EpochSeconds;
	endDate?: EpochSeconds;
};
