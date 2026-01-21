import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import type { EpochSeconds } from '../../utils/DataTypes/DateTypes';
import { FilterSortBy, type Filters } from '../../utils/DataTypes/FilterTypes';

type FiltersState = Filters;

const startOfMonth = dayjs().startOf('month').unix() as EpochSeconds;
const endOfMonth = dayjs().endOf('month').unix() as EpochSeconds;

const initialState: FiltersState = {
	text: '',
	sortBy: FilterSortBy.DATE,
	startDate: startOfMonth,
	endDate: endOfMonth,
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setTextFilter(state, action: PayloadAction<FiltersState['text']>) {
			state.text = action.payload;
		},
		setSortBy(state, action: PayloadAction<FiltersState['sortBy']>) {
			state.sortBy = action.payload;
		},
		setStartDate(state, action: PayloadAction<FiltersState['startDate']>) {
			state.startDate = action.payload;
		},
		setEndDate(state, action: PayloadAction<FiltersState['endDate']>) {
			state.endDate = action.payload;
		},
	},
});

export const { setTextFilter, setSortBy, setStartDate, setEndDate } = filtersSlice.actions;
export default filtersSlice.reducer;
