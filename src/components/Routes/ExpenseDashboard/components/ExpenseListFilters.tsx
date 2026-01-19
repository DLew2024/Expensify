import { useDispatch, useSelector } from '../../../../store/hooks';
import {
	setSortBy,
	setTextFilter,
} from '../../../../store/slices/filtersSlice';
import type { AppState } from '../../../../store/store';
import {
	FilterSortBy,
	type FilterSortByType,
} from '../../../../utils/DataTypes/FilterTypes';

const ExpenseListFilters = () => {
	const dispatch = useDispatch();
	const $filters = useSelector((state: AppState) => state.filters);

	return (
		<div>
			<label htmlFor="expense-search">Search Expenses:</label>
			<input
				id="expense-search"
				type="text"
				placeholder="Search expenses..."
				value={$filters.text}
				onChange={(e) => dispatch(setTextFilter(e.target.value))}
			/>
			<select
				title="Sort By"
				value={$filters.sortBy}
				onChange={(e) => {
					dispatch(setSortBy(e.target.value as FilterSortByType));
				}}
			>
				<option value={FilterSortBy.DATE}>Date</option>
				<option value={FilterSortBy.AMOUNT}>Amount</option>
			</select>
		</div>
	);
};

export default ExpenseListFilters;
