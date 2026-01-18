import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Filters } from '../../utils/DataTypes/FilterTypes';

type FiltersState = {
	filters: Filters;
};

const initialState: FiltersState = {
	filters: {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined,
	},
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setTextFilter(state, action: PayloadAction<string>) {
			state.filters.text = action.payload;
		},
		sortByAmount(state) {
			state.filters.sortBy = 'amount';
		},
		sortByDate(state) {
			state.filters.sortBy = 'date';
		},
		setStartDate(state, action: PayloadAction<number | undefined>) {
			state.filters.startDate = action.payload;
		},
		setEndDate(state, action: PayloadAction<number | undefined>) {
			state.filters.endDate = action.payload;
		},
	},
});

export const { setTextFilter, sortByAmount, sortByDate } = filtersSlice.actions;
export default filtersSlice.reducer;
