import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
	FilterSortBy,
	type FilterSortByType,
} from '../../utils/DataTypes/FilterTypes';

type FiltersState = {
	text: string;
	sortBy: FilterSortByType;
	startDate?: number;
	endDate?: number;
};

const initialState: FiltersState = {
	text: '',
	sortBy: FilterSortBy.DATE,
	startDate: undefined,
	endDate: undefined,
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setTextFilter(state, action: PayloadAction<string>) {
			state.text = action.payload;
		},
		setSortBy(state, action: PayloadAction<FilterSortByType>) {
			state.sortBy = action.payload;
		},
		setStartDate(state, action: PayloadAction<number | undefined>) {
			state.startDate = action.payload;
		},
		setEndDate(state, action: PayloadAction<number | undefined>) {
			state.endDate = action.payload;
		},
	},
});

export const { setTextFilter, setSortBy } = filtersSlice.actions;
export default filtersSlice.reducer;
