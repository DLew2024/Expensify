import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { FilterSortBy, type Filters } from '../../utils/DataTypes/FilterTypes';

type FiltersState = Filters;

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

export const { setTextFilter, setSortBy } = filtersSlice.actions;
export default filtersSlice.reducer;
