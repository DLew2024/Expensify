import { useDispatch, useSelector } from '../../../../store/hooks';
import { setTextFilter } from '../../../../store/slices/filtersSlice';
import type { AppState } from '../../../../store/store';

const ExpenseListFilters = () => {
	const dispatch = useDispatch();
	const $filters = useSelector((state: AppState) => state.filters.filters);

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
		</div>
	);
};

export default ExpenseListFilters;
